import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
import { PrismaService } from '../prisma.service';
import { OtpModule } from 'modules/otp/otp.module';
import { MailModule } from 'modules/mail/mail.module';

@Module({
  imports: [OtpModule, MailModule],
  providers: [WalletResolver, WalletService, PrismaService],
  exports: [WalletService],
})
export class WalletModule {}
