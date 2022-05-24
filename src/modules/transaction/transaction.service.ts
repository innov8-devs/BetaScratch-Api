import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Prisma } from '@prisma/client';
import * as Flutterwave from 'flutterwave-node-v3';
import {
  InitiatePaymentInput,
  TransactionHistoryInput,
} from './dto/request.dto';
import { PrismaService } from '../prisma.service';
import { generateRandomString } from 'utils/generateRandomString.util';
import {
  CURRENCY,
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  TRANSACTION,
} from 'types/constants/enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { calculateCashback } from 'helpers/calculateCashback';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTransaction(input: Prisma.TransactionCreateInput) {
    return await this.prismaService.transaction.create({
      data: {
        ...input,
      },
    });
  }

  async initiatePayment(input: InitiatePaymentInput, user: User) {
    const { currency, amount, purpose } = input;
    const transactionRef = generateRandomString();
    try {
      const response = await axios({
        url: 'https://api.flutterwave.com/v3/payments',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          tx_ref: transactionRef,
          amount,
          currency,
          redirect_url: `${process.env.CORS_ORIGIN}/user/payment/verify`,
          meta: {
            consumer_id: user.id,
            consumer_mac: generateRandomString(),
          },
          customer: {
            email: user.email,
            phonenumber: user.mobileNumber,
            name: `${user.firstName} ${user.lastName}`,
          },
          customizations: {
            title: 'BetaScratch',
            logo: `${process.env.CORS_ORIGIN}/images/logo_6.png`,
          },
        }),
      });
      await this.createTransaction({
        currency: CURRENCY.NGN,
        purpose,
        status: PAYMENT_STATUS.PENDING,
        transactionRef,
        transactionId: 0,
        amount: Number(amount),
        User: {
          connect: {
            id: user.id,
          },
        },
      });
      return response.data.data.link;
    } catch (err) {
      if (err) return null;
    }
  }

  async checkTotalAmountSpent(userId: number) {
    if (!userId) return null;
    let totalAmountSpent: number = 0;

    const userSpentTransaction = await this.prismaService.transaction.findMany({
      where: {
        AND: [
          {
            userId: { equals: userId },
          },
          {
            status: { equals: PAYMENT_STATUS.SUCCESSFUL },
          },
          {
            purpose: { equals: PAYMENT_PURPOSE.CART },
          },
        ],

        OR: [
          {
            type: { equals: TRANSACTION.FLUTTERWAVE },
          },
          {
            type: { equals: TRANSACTION.ACCOUNT },
          },
        ],
      },
    });

    userSpentTransaction.forEach((transaction) => {
      totalAmountSpent += transaction.amount;
    });

    return totalAmountSpent;
  }

  async verifyFlutterWaveTransaction(transaction_id: number) {
    const flw = new Flutterwave(
      process.env.FLUTTERWAVE_PUBLIC_KEY,
      process.env.FLUTTERWAVE_SECRET_KEY,
    );
    const response = await flw.Transaction.verify({ id: transaction_id });
    const data = response.data;
    return {
      status: data.status,
      amount: data.amount,
      currency: data.currency,
      tx_ref: data.tx_ref,
    };
  }

  async transactionHistory(userId: number, input: TransactionHistoryInput) {
    const { page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.transaction.findMany({
      where: {
        userId,
      },
      take: size,
      skip: skipValue,
      orderBy: {
        id: 'desc',
      },
    });
  }

  async cashback(userId: number, subtotal: number) {
    const cashBackAmount = calculateCashback(subtotal);

    const userWallet = await this.prismaService.wallet.findUnique({
      where: { userId },
    });

    await this.prismaService.wallet.update({
      where: { userId },
      data: {
        bonus: userWallet.bonus + cashBackAmount,
      },
    });
  }

  async fetchFlutterTransactions(from: string, to: string) {
    const flw = new Flutterwave(
      process.env.FLUTTERWAVE_PUBLIC_KEY,
      process.env.FLUTTERWAVE_SECRET_KEY,
    );
    let result = [];
    try {
      const payload = {
        from,
        to,
      };
      const response = await flw.Transaction.fetch(payload);
      for (let data of response.data) {
        result.push({
          id: data.id,
          amount: data.amount,
          currency: data.currency,
          narration: data.narration,
          status: data.status,
          payment_type: data.payment_type,
          createdAt: data.created_at,
          card: data.card,
          customer: data.customer,
        });
      }
      return result;
    } catch (error) {
      throw new BadRequestException({
        name: 'transaction',
        message: 'cannot get transactions',
      });
    }
  }

  async fetchFlutterTransactionTimeline(transactionId: number) {
    const flw = new Flutterwave(
      process.env.FLUTTERWAVE_PUBLIC_KEY,
      process.env.FLUTTERWAVE_SECRET_KEY,
    );
    let result = [];
    try {
      const betatransaction = await this.prismaService.transaction.findFirst({
        where: { transactionId },
      });
      const payload = {
        id: transactionId,
      };
      const response = await flw.Transaction.event(payload);
      for (let trx of response.data) {
        result.push({
          note: trx.note,
          createdAt: trx.created_at,
          action: trx.action,
        });
      }
      return {
        status: response.status,
        message: response.message,
        data: result,
        betatransaction,
      };
    } catch (error) {
      throw new BadRequestException({
        name: 'transaction',
        message: 'cannot get transaction timeline',
      });
    }
  }
}
