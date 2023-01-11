import { Module } from '@nestjs/common';
import { RaffleService } from './raffle.service';
import { RaffleResolver } from './raffle.resolver';
import { PrismaService } from 'modules/prisma.service';

@Module({
  providers: [RaffleResolver, RaffleService, PrismaService],
})
export class RaffleModule {}
