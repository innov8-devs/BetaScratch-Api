import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { PrismaService } from 'modules/prisma.service';
import { MailService } from 'modules/mail/mail.service';
import { TokenService } from 'modules/token/token.service';
import { AuthService } from 'modules/auth/auth.service';
import { AuthModule } from 'modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { TransactionService } from 'modules/transaction/transaction.service';
import { TransactionModule } from 'modules/transaction/transaction.module';
import { MessageModule } from 'modules/message/message.module';
import { AdminController } from './admin.controller';
import { SmsModule } from 'modules/sms/sms.module';
import { SmsService } from 'modules/sms/sms.service';
import { CouponModule } from 'modules/coupon/coupon.module';
import { CouponService } from 'modules/coupon/coupon.service';

@Module({
  imports: [
    AuthModule,
    JwtModule.register({}),
    TransactionModule,
    MessageModule,
    SmsModule,
    CouponModule,
  ],
  controllers: [AdminController],
  providers: [
    AdminResolver,
    AdminService,
    PrismaService,
    MailService,
    TokenService,
    AuthService,
    TransactionService,
    SmsService,
    CouponService,
  ],
})
export class AdminModule {}
