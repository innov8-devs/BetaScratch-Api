import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  WALLET_TYPE,
} from 'types/constants/enum';
import { generateRandomString } from 'utils/generateRandomString.util';
import { MESSAGES } from '../../core/messages';
import { PrismaService } from '../prisma.service';
import {
  CashBackTransactionInput,
  DeductUserBalanceInput,
} from './dto/request.dto';

@Injectable()
export class WalletService {
  constructor(private readonly prisma: PrismaService) {}

  async you(user: User): Promise<User> {
    return user;
  }

  async createWallet(input: Prisma.WalletCreateInput) {
    return await this.prisma.wallet.create({
      data: {
        ...input,
      },
    });
  }

  async getUserBalance(userId: number) {
    return await this.prisma.wallet.findUnique({
      where: {
        userId,
      },
    });
  }

  async deductUserBalance(
    input: DeductUserBalanceInput,
    userId: number,
  ): Promise<Boolean> {
    const { amount, currency, wallet } = input;
    const errMessage = [];
    const userBalance = await this.getUserBalance(userId);
    if (
      wallet === WALLET_TYPE.WITHDRAWABLE &&
      Number(amount) > userBalance.withdrawable
    ) {
      errMessage.push(MESSAGES.USER.INSUFFICIENT_WALLET_FUND);
    }
    if (wallet === WALLET_TYPE.BONUS && Number(amount) > userBalance.bonus) {
      errMessage.push(MESSAGES.USER.INSUFFICIENT_WALLET_FUND);
    }
    if (errMessage.length) throw new BadRequestException(errMessage);
    try {
      if (wallet === WALLET_TYPE.WITHDRAWABLE) {
        await this.prisma.wallet.update({
          data: {
            withdrawable: Number(userBalance.withdrawable) - Number(amount),
          },
          where: {
            userId: userId,
          },
        });
      } else if (wallet === WALLET_TYPE.BONUS) {
        await this.prisma.wallet.update({
          data: {
            bonus: Number(userBalance.bonus) - Number(amount),
          },
          where: {
            userId: userId,
          },
        });
      }

      await this.prisma.transaction.create({
        data: {
          amount: Number(amount),
          currency,
          purpose:
            wallet === WALLET_TYPE.WITHDRAWABLE
              ? PAYMENT_PURPOSE.DEDUCT_WITHDRAWAL_BALANCE
              : PAYMENT_PURPOSE.DEDUCT_BONUS_BALANCE,
          status: PAYMENT_STATUS.SUCCESSFUL,
          transactionId: generateRandomString(),
          transactionRef: generateRandomString(),
          User: { connect: { id: userId } },
        },
      });
      return true;
    } catch (e) {
      await this.prisma.transaction.create({
        data: {
          amount: Number(amount),
          currency,
          purpose:
            wallet === WALLET_TYPE.WITHDRAWABLE
              ? PAYMENT_PURPOSE.DEDUCT_WITHDRAWAL_BALANCE
              : PAYMENT_PURPOSE.DEDUCT_BONUS_BALANCE,
          status: PAYMENT_STATUS.FAILED,
          transactionId: generateRandomString(),
          transactionRef: generateRandomString(),
          User: { connect: { id: userId } },
        },
      });
      return false;
    }
  }

  async cashBack(input: CashBackTransactionInput, userId: number) {
    const { cashBackAmount, currency } = input;

    const userWallet = await this.prisma.wallet.findUnique({
      where: {
        userId,
      },
    });

    await this.prisma.wallet.update({
      where: {
        userId,
      },
      data: {
        bonus: userWallet.bonus + cashBackAmount,
      },
    });

    await this.prisma.transaction.create({
      data: {
        amount: cashBackAmount,
        currency,
        purpose: PAYMENT_PURPOSE.CASH_BACK,
        status: PAYMENT_STATUS.SUCCESSFUL,
        transactionId: generateRandomString(),
        transactionRef: generateRandomString(),
        User: { connect: { id: userId } },
      },
    });
    return true;
  }
}
