import { TRANSACTION_TYPE } from '@generated/prisma-nestjs-graphql/prisma/transaction-type.enum';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import {
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  TRANSACTION,
} from 'types/constants/enum';
import {
  generateRandomNumbers,
  generateRandomString,
} from 'utils/generateRandomString.util';
import {
  RaffleSearch,
  StakeRaffleInput,
  UpdateRaffleInput,
} from './dto/request.dto';

@Injectable()
export class RaffleService {
  constructor(private readonly prismaService: PrismaService) {}

  async updateRaffleDetails(input: UpdateRaffleInput) {
    try {
      const { stake, win, expiry, type } = input;
      await this.prismaService.raffle.update({
        where: { type },
        data: { stake, win, expiry },
      });
      return true;
    } catch (err) {
      throw new BadRequestException({
        name: 'raffle',
        message: MESSAGES.RAFFLE.UNABLE_TO_UPDATE,
      });
    }
  }

  async getRaffleDetails() {
    try {
      return await this.prismaService.raffle.findMany();
    } catch (err) {
      throw new BadRequestException({
        name: 'raffle',
        message: MESSAGES.RAFFLE.UNABLE_TO_FIND,
      });
    }
  }

  async stakeUserRaffle(userId: number, input: StakeRaffleInput) {
    const { transaction_type, reference, ticket, type } = input;
    try {
      const raffle = await this.prismaService.raffle.findUnique({
        where: { type },
      });
      if (!raffle) {
        throw new BadRequestException({
          name: 'raffle',
          message: MESSAGES.RAFFLE.UNABLE_TO_FIND,
        });
      }

      const subtotal = ticket.length * raffle.stake;

      if (
        transaction_type === TRANSACTION_TYPE.WALLET ||
        transaction_type === TRANSACTION_TYPE.BONUS
      ) {
        const userWallet = await this.prismaService.wallet.findUnique({
          where: { userId },
        });
        if (transaction_type === TRANSACTION_TYPE.WALLET) {
          if (subtotal > userWallet.withdrawable) {
            await this.prismaService.transaction.create({
              data: {
                amount: subtotal,
                currency: 'NGN',
                purpose: PAYMENT_PURPOSE.RAFFLE,
                status: PAYMENT_STATUS.FAILED,
                type: TRANSACTION.WALLET,
                transactionId: generateRandomNumbers(),
                transactionRef: generateRandomString(),
                user: { connect: { id: userId } },
              },
            });

            throw new BadRequestException({
              name: 'raffle',
              message: MESSAGES.USER.INSUFFICIENT_WALLET_FUND,
            });
          }
          await this.prismaService.wallet.update({
            where: { userId },
            data: { withdrawable: { decrement: subtotal } },
          });
        } else if (transaction_type === TRANSACTION_TYPE.BONUS) {
          if (subtotal > userWallet.bonus) {
            await this.prismaService.transaction.create({
              data: {
                amount: subtotal,
                currency: 'NGN',
                purpose: PAYMENT_PURPOSE.RAFFLE,
                status: PAYMENT_STATUS.FAILED,
                type: TRANSACTION.BONUS,
                transactionId: generateRandomNumbers(),
                transactionRef: generateRandomString(),
                user: { connect: { id: userId } },
              },
            });

            throw new BadRequestException({
              name: 'raffle',
              message: MESSAGES.USER.INSUFFICIENT_WALLET_FUND,
            });
          }
          await this.prismaService.wallet.update({
            where: { userId },
            data: { bonus: { decrement: subtotal } },
          });
        }
      }

      for (let stake of ticket) {
        await this.prismaService.stakedRaffleTickets.create({
          data: {
            isPaid:
              transaction_type === TRANSACTION_TYPE.FLUTTERWAVE ? false : true,
            originalNumbers: stake.original,
            sortedNumbers: stake.sorted,
            transactionType: transaction_type,
            type,
            reference,
            user: { connect: { id: userId } },
          },
        });

        await this.prismaService.transaction.create({
          data: {
            amount: subtotal,
            currency: 'NGN',
            purpose: PAYMENT_PURPOSE.RAFFLE,
            status: PAYMENT_STATUS.SUCCESSFUL,
            type,
            transactionId: generateRandomNumbers(),
            transactionRef: generateRandomString(),
            user: { connect: { id: userId } },
          },
        });
      }
      return true;
    } catch (err) {
      throw new BadRequestException({
        name: 'raffle',
        message: MESSAGES.RAFFLE.UNABLE_TO_STAKE,
      });
    }
  }

  async findOneStakedRaffle(raffleId: number) {
    try {
      return await this.prismaService.stakedRaffleTickets.findUnique({
        where: { id: raffleId },
      });
    } catch (err) {
      throw new BadRequestException({
        name: 'raffle',
        message: MESSAGES.RAFFLE.UNABLE_TO_FIND_TICKET,
      });
    }
  }

  async findAllStakedRaffle(input: RaffleSearch) {
    try {
      const { page, size } = input;
      let skipValue = page * size - size;
      return await this.prismaService.stakedRaffleTickets.findMany({
        take: size,
        skip: skipValue,
        orderBy: { id: 'desc' },
      });
    } catch (err) {
      throw new BadRequestException({
        name: 'raffle',
        message: MESSAGES.RAFFLE.UNABLE_TO_FIND_TICKET,
      });
    }
  }
}
