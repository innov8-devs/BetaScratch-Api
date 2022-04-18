import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import { MailService } from 'modules/mail/mail.service';
import { OtpService } from 'modules/otp/otp.service';
import {
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  TRANSACTION,
  WALLET_TYPE,
} from 'types/constants/enum';
import { generateRandomString } from 'utils/generateRandomString.util';
import { MESSAGES } from '../../core/messages';
import { PrismaService } from '../prisma.service';
import {
  CashBackTransactionInput,
  DeductUserBalanceInput,
  WithdrawalRequestPaginationInput,
} from './dto/request.dto';

@Injectable()
export class WalletService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly otpService: OtpService,
    private readonly mailService: MailService,
  ) {}

  async createWallet(input: Prisma.WalletCreateInput) {
    return await this.prismaService.wallet.create({
      data: {
        ...input,
      },
    });
  }

  async getUserBalance(userId: string) {
    return await this.prismaService.wallet.findUnique({
      where: {
        userId: Number(userId),
      },
    });
  }

  async deductUserBalance(
    input: DeductUserBalanceInput,
    userId: number,
  ): Promise<Boolean> {
    const { amount, currency, wallet } = input;
    const errMessage = [];
    const userBalance = await this.getUserBalance(userId.toString());
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
        await this.prismaService.wallet.update({
          data: {
            withdrawable: Number(userBalance.withdrawable) - Number(amount),
          },
          where: {
            userId: userId,
          },
        });
      } else if (wallet === WALLET_TYPE.BONUS) {
        await this.prismaService.wallet.update({
          data: {
            bonus: Number(userBalance.bonus) - Number(amount),
          },
          where: {
            userId: userId,
          },
        });
      }

      await this.prismaService.transaction.create({
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
      await this.prismaService.transaction.create({
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

    const userWallet = await this.prismaService.wallet.findUnique({
      where: {
        userId,
      },
    });

    await this.prismaService.wallet.update({
      where: {
        userId,
      },
      data: {
        bonus: userWallet.bonus + cashBackAmount,
      },
    });

    await this.prismaService.transaction.create({
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

  async sendWithDrawalOtp(userId: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    const otp = await this.otpService.createAuthOtp(
      user,
      TRANSACTION.REQUEST_WITHDRAWAL,
    );

    await this.mailService.sendMail({
      subject: MAIL_SUBJECT.REQUEST_WITHDRAWAL,
      html: MAIL_MESSAGE.REQUEST_WITHDRAWAL(otp.code),
      to: user.email,
    });

    return true;
  }

  async recordWithdrawalRequest(
    input: Prisma.WithdrawalRequestCreateInput,
    otp: string,
    userId: number,
  ) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });
    if (!user) return null;
    const otpValidity = await this.otpService.checkOtpValidity({
      mobileNumber: user.mobileNumber,
      otp,
    });

    if (!otpValidity)
      throw new UnauthorizedException(MESSAGES.AUTH.INVALID_OTP);

    await this.otpService.validateOtp({
      mobileNumber: user.mobileNumber,
      otp,
    });

    return await this.prismaService.withdrawalRequest.create({
      data: {
        ...input,
        status: 'Pending',
        User: { connect: { id: userId } },
      },
    });
  }

  async getAllWithdrawalRequest(input?: WithdrawalRequestPaginationInput) {
    const { skip, take } = input;
    return await this.prismaService.withdrawalRequest.findMany({
      skip,
      take,
    });
  }

  async getTotalWalletBalance() {
    let total = 0;
    let wallets = await this.prismaService.wallet.findMany();
    for (let val of wallets) {
      total += val.withdrawable;
    }
    return total;
  }

  async getTotalBonusBalance() {
    let total = 0;
    let wallets = await this.prismaService.wallet.findMany();
    for (let val of wallets) {
      total += val.bonus;
    }
    return total;
  }
}
