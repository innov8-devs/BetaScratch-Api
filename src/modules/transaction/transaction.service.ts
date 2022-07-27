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
import { computeCheckoutMessageCards } from 'helpers/computeCheckoutMessageCards';
import { CartItems } from 'modules/game/dto/game.request';
import { calculateVipStatus } from 'helpers/calculateVipStatus';
import { MessageService } from 'modules/message/message.service';
import { Response } from 'express';

@Injectable()
export class TransactionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly messageService: MessageService,
  ) {}

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
        user: {
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
            type: { equals: TRANSACTION.WALLET },
          },
        ],
      },
    });

    userSpentTransaction.forEach((transaction) => {
      totalAmountSpent += transaction.amount;
    });

    return totalAmountSpent;
  }

  async verifyFlutterWaveTransaction(transaction_id: number, test: boolean) {
    let flw;
    if (test) {
      flw = new Flutterwave(
        'FLWPUBK_TEST-605e7bf00f5a3971a24bdd8f36acb345-X',
        'FLWSECK_TEST-fc7e5f67bce038ac4ba1d449f50fd72e-X',
      );
    } else {
      flw = new Flutterwave(
        process.env.FLUTTERWAVE_PUBLIC_KEY,
        process.env.FLUTTERWAVE_SECRET_KEY,
      );
    }
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

  async calculateVipProgress(userId: number) {
    const totalAmountSpent = await this.checkTotalAmountSpent(userId);
    const vipStatus = calculateVipStatus(totalAmountSpent);
    await this.prismaService.user.update({
      where: { id: userId },
      data: { vipStatus },
    });
  }

  async verifyCheckout(data: any, res: Response) {
    const tx_ref = data.tx_ref;
    const status = data.status;
    const amount = data.amount;
    const paymentType = data.payment_type;

    const user = await this.prismaService.user.findUnique({
      where: { email: data.customer.email },
    });

    const confirmedPurchase = await this.prismaService.purchase.findFirst({
      where: {
        AND: [
          {
            reference: { equals: tx_ref },
            userId: { equals: user.id },
            status: { equals: 'active' },
            subtotal: { equals: amount },
          },
        ],
      },
    });

    if (confirmedPurchase) return res.status(200).end();

    await this.prismaService.flutterwaveLog.create({
      data: {
        transactionId: data.id,
        card: {
          first6digits: data.card.first_6digits,
          last4digits: data.card.last_4digits,
          issuer: data.card.issuer,
          country: data.card.country,
          type: data.card.type,
          expiry: data.card.expiry,
        },
        currency: data.currency,
        ip: data.ip,
        narration: data.narration,
        paymentType,
        status,
        tx_ref,
        amount,
        customerName: data.customer.name,
        customerEmail: data.customer.email,
        processorResponse: data.processor_response,
      },
    });

    if (status === 'successful') {
      const cartItems = await this.prismaService.cart.findMany({
        where: {
          AND: [
            { transactionRef: { equals: tx_ref } },
            { userId: { equals: user.id } },
          ],
        },
      });

      const userCartItems: CartItems[] = [];

      for (let item of cartItems) {
        userCartItems.push({
          category: item.category,
          gameId: '1', // TODO come here and sort the game id out later
          id: item.id.toString(),
          imageUrl: item.imageUrl,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        });
      }

      const messageCards = computeCheckoutMessageCards(
        userCartItems,
        user.id,
        tx_ref,
      );
      await this.messageService.sendCheckoutMessage(user.id, messageCards);
      await this.calculateVipProgress(user.id);
      await this.cashback(user.id, amount);

      await this.prismaService.transaction.updateMany({
        where: {
          transactionRef: tx_ref,
        },
        data: {
          status: PAYMENT_STATUS.SUCCESSFUL,
          amount,
        },
      });

      await this.prismaService.purchase.updateMany({
        where: {
          AND: [
            {
              reference: { equals: tx_ref },
              userId: { equals: user.id },
            },
          ],
        },
        data: {
          status: 'active',
          subtotal: amount,
          flutterwaveType: paymentType,
        },
      });

      // refferal
      const userPurchase = await this.prismaService.purchase.findMany({
        where: {
          AND: [
            {
              reference: { equals: tx_ref },
              userId: { equals: user.id },
              status: { equals: 'active' },
            },
          ],
        },
      });

      if (userPurchase.length === 1) {
        const referral = await this.prismaService.referral.findFirst({
          where: { referrals: { has: user.id } },
        });

        if (referral) {
          const referrerAmount = (5 * amount) / 100;

          await this.prismaService.wallet.update({
            where: { userId: referral.userId },
            data: {
              withdrawable: { increment: referrerAmount },
              bonus: { increment: 500 },
            },
          });

          await this.prismaService.referral.update({
            where: { userId: referral.userId },
            data: {
              invitesFunded: { increment: 1 },
              totalEarned: { increment: referrerAmount },
            },
          });

          const refereeAmount = (3 * amount) / 100;

          await this.prismaService.wallet.update({
            where: { userId: user.id },
            data: {
              withdrawable: { increment: refereeAmount },
              bonus: { increment: 500 },
            },
          });
        }
      }

      return res.status(200).end();
    } else if (status === 'failed') {
      await this.prismaService.transaction.updateMany({
        where: {
          transactionRef: tx_ref,
        },
        data: {
          status: PAYMENT_STATUS.FAILED,
        },
      });
      await this.prismaService.purchase.updateMany({
        where: { reference: tx_ref },
        data: { status, subtotal: amount },
      });

      return res.status(200).end();
    }
  }

  async verifyDeposit(data: any, res: Response) {
    const tx_ref = data.tx_ref;
    const status = data.status;
    const amount = data.amount;
    const currency = data.currency;
    const transactionId = data.id;
    const user = await this.prismaService.user.findUnique({
      where: { email: data.customer.email },
    });

    await this.prismaService.flutterwaveLog.create({
      data: {
        transactionId: data.id,
        card: {
          first6digits: data.card.first_6digits,
          last4digits: data.card.last_4digits,
          issuer: data.card.issuer,
          country: data.card.country,
          type: data.card.type,
          expiry: data.card.expiry,
        },
        currency: data.currency,
        ip: data.ip,
        narration: data.narration,
        paymentType: data.payment_type,
        status: data.status,
        tx_ref,
        amount,
        customerName: data.customer.name,
        customerEmail: data.customer.email,
        processorResponse: data.processor_response,
      },
    });

    const depositTransaction = await this.prismaService.transaction.findFirst({
      where: {
        AND: [
          { transactionRef: { equals: tx_ref } },
          { amount: { equals: amount } },
          { userId: { equals: user.id } },
          { status: { equals: PAYMENT_STATUS.SUCCESSFUL } },
          { transactionId: { equals: transactionId } },
        ],
      },
    });

    if (depositTransaction) return res.status(200).end();

    if (status === 'successful') {
      await this.createTransaction({
        amount,
        currency,
        purpose: PAYMENT_PURPOSE.DEPOSIT,
        status: PAYMENT_STATUS.SUCCESSFUL,
        type: TRANSACTION.FLUTTERWAVE,
        transactionId,
        transactionRef: tx_ref,
        user: { connect: { id: user.id } },
      });

      await this.prismaService.wallet.update({
        where: {
          userId: user.id,
        },
        data: {
          withdrawable: { increment: amount },
        },
      });
      res.status(200).end();
    } else if (status === 'failed') {
      await this.createTransaction({
        amount,
        currency,
        purpose: PAYMENT_PURPOSE.DEPOSIT,
        status: PAYMENT_STATUS.FAILED,
        type: TRANSACTION.FLUTTERWAVE,
        transactionId,
        transactionRef: tx_ref,
        user: { connect: { id: user.id } },
      });
      res.status(200).end();
    }
  }
}
