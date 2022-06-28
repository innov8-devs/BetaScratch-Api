import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'modules/auth/auth.module';
import { AuthService } from 'modules/auth/auth.service';
import { TransactionModule } from 'modules/transaction/transaction.module';
import { TransactionService } from 'modules/transaction/transaction.service';
import { MessageService } from 'modules/message/message.service';

@Module({
  imports: [JwtModule.register({}), AuthModule, TransactionModule],
  providers: [
    GameResolver,
    GameService,
    PrismaService,
    AuthService,
    TransactionService,
    MessageService,
  ],
})
export class GameModule {}
