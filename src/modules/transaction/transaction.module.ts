import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from '../prisma.service';
import { OtpModule } from 'modules/otp/otp.module';
import { MailModule } from 'modules/mail/mail.module';

@Module({
  imports: [OtpModule, MailModule],
  providers: [TransactionResolver, TransactionService, PrismaService],
  exports: [TransactionService],
})
export class TransactionModule {}
