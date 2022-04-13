import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from '../prisma.service';
import { WalletModule } from 'modules/wallet/wallet.module';
import { WalletService } from 'modules/wallet/wallet.service';
import { OtpModule } from 'modules/otp/otp.module';
import { MailModule } from 'modules/mail/mail.module';

@Module({
  imports: [WalletModule, OtpModule, MailModule],
  providers: [
    TransactionResolver,
    TransactionService,
    PrismaService,
    WalletService,
  ],
  exports: [TransactionService],
})
export class TransactionModule {}
