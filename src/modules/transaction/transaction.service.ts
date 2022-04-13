import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Prisma } from '@prisma/client';
import {
  InitiatePaymentInput,
  VerifyTransactionInput,
} from './dto/request.dto';
import { PrismaService } from '../prisma.service';
import { generateRandomString } from 'utils/generateRandomString.util';
import {
  CURRENCY,
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
} from 'types/constants/enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { WalletService } from 'modules/wallet/wallet.service';
import { calculateCashback } from 'helpers/calculateCashback';

@Injectable()
export class TransactionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly walletService: WalletService,
  ) {}

  async createTransaction(input: Prisma.TransactionCreateInput) {
    return await this.prisma.transaction.create({
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
        transactionId: 'null',
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

  async verifyTransaction(
    input: VerifyTransactionInput,
    userId: number,
  ): Promise<String> {
    const { tx_ref, status, tx_id } = input;
    const transactionId = tx_id ? tx_id : 'null';
    await this.prisma.transaction.updateMany({
      data: {
        transactionId,
        status: status.toUpperCase(),
        transactionRef: tx_ref,
      },
      where: {
        status: PAYMENT_STATUS.PENDING,
        transactionId: 'null',
        userId,
      },
    });
    if (status.toUpperCase() === PAYMENT_STATUS.SUCCESSFUL) {
      const transaction = await this.prisma.transaction.findFirst({
        where: {
          status: PAYMENT_STATUS.SUCCESSFUL,
          transactionRef: tx_ref,
          transactionId,
          userId,
        },
      });
      if (
        transaction.purpose.toUpperCase() === PAYMENT_PURPOSE.DEPOSIT &&
        transaction.status.toLocaleUpperCase() === PAYMENT_STATUS.SUCCESSFUL
      ) {
        // TODO move code to waller service
        const wallet = await this.prisma.wallet.findUnique({
          where: { userId },
        });
        await this.prisma.wallet.update({
          data: {
            withdrawable: wallet.withdrawable + transaction.amount,
          },
          where: {
            userId,
          },
        });
      } else if (
        transaction.purpose.toUpperCase() === PAYMENT_PURPOSE.PURCHASE &&
        transaction.status.toLocaleUpperCase() === PAYMENT_STATUS.SUCCESSFUL
      ) {
        let cashBackAmount = calculateCashback(transaction.amount);
        await this.walletService.cashBack(
          { cashBackAmount, currency: transaction.currency },
          userId,
        );
      }
    }
    return status;
  }

  async checkTotalAmountSpent(userId: any) {
    if (!userId) return null;
    let totalAmountSpent: number = 0;

    const userSpentTransaction = await this.prisma.transaction.findMany({
      where: {
        AND: [
          {
            userId: { equals: userId },
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
}
