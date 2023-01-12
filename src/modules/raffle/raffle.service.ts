import { BadRequestException, Injectable } from '@nestjs/common';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import { StakeRaffleInput, UpdateRaffleInput } from './dto/request.dto';

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
    const { stakes, type } = input;
    try {
      for (let stake of stakes) {
        await this.prismaService.stakedRaffle.create({
          data: {
            type,
            numbers: stake,
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
}
