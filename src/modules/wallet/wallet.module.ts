import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
import { PrismaService } from '../prisma.service';
import { OtpModule } from 'modules/otp/otp.module';
import { MailModule } from 'modules/mail/mail.module';
import { AuthModule } from 'modules/auth/auth.module';
import { AuthService } from 'modules/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [OtpModule, MailModule, AuthModule, JwtModule.register({})],
  providers: [WalletResolver, WalletService, PrismaService, AuthService],
  exports: [WalletService],
})
export class WalletModule {}
