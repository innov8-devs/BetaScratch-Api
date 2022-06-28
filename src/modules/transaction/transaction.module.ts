import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from '../prisma.service';
import { OtpModule } from 'modules/otp/otp.module';
import { MailModule } from 'modules/mail/mail.module';
import { AuthModule } from 'modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'modules/auth/auth.service';
import { TransactionController } from './transaction.controller';
import { MessageService } from 'modules/message/message.service';

@Module({
  imports: [OtpModule, MailModule, JwtModule.register({}), AuthModule],
  controllers: [TransactionController],
  providers: [
    TransactionResolver,
    TransactionService,
    PrismaService,
    AuthService,
    MessageService,
  ],
  exports: [TransactionService],
})
export class TransactionModule {}
