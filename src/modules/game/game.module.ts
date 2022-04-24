import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { PrismaService } from '../prisma.service';
import { GameController } from './game.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'modules/auth/auth.module';
import { AuthService } from 'modules/auth/auth.service';

@Module({
  imports: [JwtModule.register({}), AuthModule],
  controllers: [GameController],
  providers: [GameResolver, GameService, PrismaService, AuthService],
})
export class GameModule {}
