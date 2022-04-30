import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Prisma } from '@prisma/client';
import * as Flutterwave from 'flutterwave-node-v3';
import { InitiatePaymentInput } from './dto/request.dto';
import { PrismaService } from '../prisma.service';
import { generateRandomString } from 'utils/generateRandomString.util';
import {
  CURRENCY,
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
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

  async checkTotalAmountSpent(userId: string) {
    if (!userId) return null;
    let totalAmountSpent: number = 0;

    const userSpentTransaction = await this.prismaService.transaction.findMany({
      where: {
        AND: [
          {
            userId: { equals: Number(userId) },
          },
          {
            status: { equals: PAYMENT_STATUS.SUCCESSFUL },
          },
          {
            purpose: { equals: PAYMENT_PURPOSE.PURCHASE },
          },
        ],
      },
    });

    userSpentTransaction.forEach((transaction) => {
      totalAmountSpent += transaction.amount;
    });

    return totalAmountSpent;
  }

  async verifyFlutterWaveTransaction(
    transaction_id: number,
    transaction_type: PAYMENT_PURPOSE,
    userId: number,
  ) {
    const flw = new Flutterwave(
      process.env.FLUTTERWAVE_PUBLIC_KEY,
      process.env.FLUTTERWAVE_SECRET_KEY,
    );
    const response = await flw.Transaction.verify({ id: transaction_id });
    const data = response.data;
    if (data.status === 'successful') {
      await this.createTransaction({
        amount: data.amount,
        currency: data.currency,
        purpose: transaction_type,
        status: data.status,
        transactionId: transaction_id,
        transactionRef: data.tx_ref,
        User: { connect: { id: userId } },
      });
    } else {
      await this.createTransaction({
        amount: data.amount,
        currency: data.currency,
        purpose: transaction_type,
        status: data.status,
        transactionId: transaction_id,
        transactionRef: data.tx_ref,
        User: { connect: { id: userId } },
      });
    }
    return {
      status: data.status,
      amount: data.amount,
    };
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
}
