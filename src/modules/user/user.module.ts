import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from '../prisma.service';
import { MailService } from '../mail/mail.service';
import { WalletModule } from '../wallet/wallet.module';
import { AuthModule } from 'modules/auth/auth.module';
import { AuthService } from 'modules/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { OtpModule } from 'modules/otp/otp.module';
import { OtpService } from 'modules/otp/otp.service';
import { UserController } from './user.controller';

@Module({
  imports: [WalletModule, AuthModule, JwtModule.register({}), OtpModule],
  controllers: [UserController],
  providers: [
    UserResolver,
    UserService,
    PrismaService,
    MailService,
    AuthService,
    OtpService,
  ],
  exports: [UserService],
})
export class UserModule {}
