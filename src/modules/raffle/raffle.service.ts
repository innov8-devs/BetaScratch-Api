import { BadRequestException, Injectable } from '@nestjs/common';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import { UpdateRaffleInput } from './dto/request.dto';

@Injectable()
export class RaffleService {
  constructor(private readonly prismaService: PrismaService) {}

  async updateRaffleDetails(input: UpdateRaffleInput) {
    try {
      const { stake, win, expiriy, type } = input;
      await this.prismaService.raffle.update({
        where: { type },
        data: { stake, win, expiriy },
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
}
