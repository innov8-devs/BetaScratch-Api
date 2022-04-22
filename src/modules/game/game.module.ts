import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { PrismaService } from '../prisma.service';
import { GameController } from './game.controller';

@Module({
  controllers: [GameController],
  providers: [GameResolver, GameService, PrismaService],
})
export class GameModule {}
