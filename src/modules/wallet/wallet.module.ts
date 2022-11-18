import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
import { PrismaService } from '../prisma.service';
import { OtpModule } from 'modules/otp/otp.module';
import { MailModule } from 'modules/mail/mail.module';
import { AuthModule } from 'modules/auth/auth.module';
import { AuthService } from 'modules/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TransactionModule } from 'modules/transaction/transaction.module';
import { TransactionService } from 'modules/transaction/transaction.service';
import { MessageModule } from 'modules/message/message.module';
import { ChatModule } from 'modules/chat/chat.module';
import { ChatGateway } from 'modules/chat/chat.gateway';
import { SmsModule } from 'modules/sms/sms.module';
import { SmsService } from 'modules/sms/sms.service';
import { CouponModule } from 'modules/coupon/coupon.module';
import { CouponService } from 'modules/coupon/coupon.service';

@Module({
  imports: [
    OtpModule,
    MailModule,
    AuthModule,
    TransactionModule,
    MessageModule,
    SmsModule,
    ChatModule,
    JwtModule.register({}),
    CouponModule,
  ],
  providers: [
    WalletResolver,
    WalletService,
    PrismaService,
    AuthService,
    TransactionService,
    ChatGateway,
    SmsService,
    CouponService,
  ],
  exports: [WalletService],
})
export class WalletModule {}
