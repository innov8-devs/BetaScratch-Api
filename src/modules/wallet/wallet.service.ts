import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { STATUS_CODES } from 'http';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import { MailService } from 'modules/mail/mail.service';
import { MessageService } from 'modules/message/message.service';
import { OtpService } from 'modules/otp/otp.service';
import { TransactionService } from 'modules/transaction/transaction.service';
import {
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  TRANSACTION,
  WALLET_TYPE,
} from 'types/constants/enum';
import {
  generateRandomNumbers,
  generateRandomString,
} from 'utils/generateRandomString.util';
import { MESSAGES } from '../../core/messages';
import { PrismaService } from '../prisma.service';
import {
  CashBackTransactionInput,
  ChangeUserWithdrawalRequestInput,
  DeductUserBalanceInput,
  WithdrawalRequestPaginationInput,
} from './dto/request.dto';

@Injectable()
export class WalletService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly otpService: OtpService,
    private readonly mailService: MailService,
    private readonly messageService: MessageService,
    private readonly transactionService: TransactionService,
  ) {}

  async createWallet(input: Prisma.WalletCreateInput) {
    return await this.prismaService.wallet.create({
      data: {
        ...input,
      },
    });
  }

  async findUnique(input: Prisma.WalletWhereUniqueInput): Promise<Wallet> {
    return await this.prismaService.wallet.findUnique({
      where: input,
    });
  }

  async getUserBalance(userId: number) {
    return await this.prismaService.wallet.findUnique({
      where: {
        userId: userId,
      },
    });
  }

  async deductUserBalance(input: DeductUserBalanceInput): Promise<Boolean> {
    const { amount, currency, wallet, userId } = input;
    const errMessage = [];
    const userBalance = await this.getUserBalance(userId);
    if (
      wallet === WALLET_TYPE.ACCOUNT &&
      Number(amount) > userBalance.withdrawable
    ) {
      errMessage.push(MESSAGES.USER.INSUFFICIENT_WALLET_FUND);
    }
    if (wallet === WALLET_TYPE.BONUS && Number(amount) > userBalance.bonus) {
      errMessage.push(MESSAGES.USER.INSUFFICIENT_WALLET_FUND);
    }
    if (errMessage.length) return false;
    try {
      if (wallet === WALLET_TYPE.ACCOUNT) {
        await this.prismaService.wallet.update({
          data: {
            withdrawable: Number(userBalance.withdrawable) - Number(amount),
          },
          where: {
            userId: userId,
          },
        });
        const withdrawalRequest =
          await this.prismaService.withdrawalRequest.findFirst({
            where: {
              userId,
              amount,
            },
          });

        await this.prismaService.withdrawalRequest.delete({
          where: { id: withdrawalRequest.id },
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
            wallet === WALLET_TYPE.ACCOUNT
              ? PAYMENT_PURPOSE.DEDUCT_WITHDRAWAL_BALANCE
              : PAYMENT_PURPOSE.DEDUCT_BONUS_BALANCE,
          status: PAYMENT_STATUS.SUCCESSFUL,
          transactionId: Number(generateRandomString()),
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
            wallet === WALLET_TYPE.ACCOUNT
              ? PAYMENT_PURPOSE.DEDUCT_WITHDRAWAL_BALANCE
              : PAYMENT_PURPOSE.DEDUCT_BONUS_BALANCE,
          status: PAYMENT_STATUS.FAILED,
          transactionId: Number(generateRandomNumbers()),
          transactionRef: generateRandomString(),
          User: { connect: { id: userId } },
        },
      });
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
        transactionId: Number(generateRandomString()),
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
    userId: number,
  ) {
    const isPending = await this.prismaService.withdrawalRequest.findFirst({
      where: {
        AND: [{ userId }, { status: 'pending' }],
      },
    });

    if (isPending) {
      throw new BadRequestException({
        name: 'withdrawal request',
        message: 'You have a pending request',
      });
    }

    const requestedAmount = Number(input.amount);
    const userWallet = await this.findUnique({ userId });
    if (requestedAmount > userWallet.withdrawable) {
      throw new NotAcceptableException({
        name: 'withdrawal',
        message: MESSAGES.USER.INSUFFICIENT_WALLET_FUND,
      });
    }

    await this.prismaService.wallet.update({
      where: { userId },
      data: { withdrawable: { decrement: Number(input.amount) } },
    });

    await this.prismaService.withdrawalRequest.create({
      data: {
        ...input,
        status: 'pending',
        user: { connect: { id: userId } },
      },
    });

    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        verificationType: input.licenseType,
        licenseNumber: input.licenseNumber,
        verificationStatus: 'pending',
      },
    });

    await this.transactionService.createTransaction({
      amount: Number(input.amount),
      currency: userWallet.currency,
      purpose: TRANSACTION.WITHDRAWAL,
      status: PAYMENT_STATUS.PENDING,
      type: TRANSACTION.WITHDRAWAL,
      transactionId: generateRandomNumbers(),
      transactionRef: generateRandomString(),
      User: { connect: { id: userId } },
    });
    await this.messageService.sendWithdrawalPending(userId);
    return true;
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

  async changeWithdrawalStatus(input: ChangeUserWithdrawalRequestInput) {
    const { id, status } = input;
    const withdrawalRequest =
      await this.prismaService.withdrawalRequest.findUnique({
        where: { id },
      });

    const user = await this.prismaService.user.findUnique({
      where: { id: withdrawalRequest.userId },
    });

    const userWallet = await this.findUnique({
      userId: withdrawalRequest.userId,
    });

    if (status === 'approved') {
      await this.prismaService.withdrawalRequest.update({
        where: { id },
        data: { status },
      });

      await this.transactionService.createTransaction({
        amount: Number(withdrawalRequest.amount),
        currency: userWallet.currency,
        purpose: TRANSACTION.WITHDRAWAL,
        status: PAYMENT_STATUS.SUCCESSFUL,
        type: TRANSACTION.WITHDRAWAL,
        transactionId: generateRandomNumbers(),
        transactionRef: generateRandomString(),
        User: { connect: { id: user.id } },
      });

      await this.mailService.sendMail({
        subject: MAIL_SUBJECT.WITHDRAWAL_APPROAL,
        html: MAIL_MESSAGE.WITHDRAWAL_APPROVAL(
          withdrawalRequest.amount,
          userWallet.currency,
        ),
        to: user.email,
      });

      await this.messageService.sendWithdrawalApproved(user.id);
    } else {
      await this.prismaService.withdrawalRequest.update({
        where: { id },
        data: { status },
      });

      await this.transactionService.createTransaction({
        amount: Number(withdrawalRequest.amount),
        currency: userWallet.currency,
        purpose: TRANSACTION.WITHDRAWAL,
        status: PAYMENT_STATUS.FAILED,
        type: TRANSACTION.WITHDRAWAL,
        transactionId: generateRandomNumbers(),
        transactionRef: generateRandomString(),
        User: { connect: { id: user.id } },
      });

      await this.prismaService.wallet.update({
        where: { userId: user.id },
        data: { withdrawable: { increment: Number(withdrawalRequest.amount) } },
      });

      await this.mailService.sendMail({
        subject: MAIL_SUBJECT.WITHDRAWAL_APPROAL,
        html: MAIL_MESSAGE.WITHDRAWAL_REJECTED(
          withdrawalRequest.amount,
          userWallet.currency,
        ),
        to: user.email,
      });

      await this.messageService.sendWithdrawalRejected(user.id);
    }
  }
}
