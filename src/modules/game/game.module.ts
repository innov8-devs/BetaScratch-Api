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
import { GameController } from './game.controller';
import { SmsService } from 'modules/sms/sms.service';

@Module({
  imports: [JwtModule.register({}), AuthModule, TransactionModule],
  controllers: [GameController],
  providers: [
    GameResolver,
    GameService,
    PrismaService,
    AuthService,
    TransactionService,
    MessageService,
    SmsService,
  ],
})
export class GameModule {}
