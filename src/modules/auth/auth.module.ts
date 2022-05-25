import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategies/jwt.strategy';
import * as dotenv from 'dotenv';
import { PrismaService } from 'modules/prisma.service';
import { OtpModule } from 'modules/otp/otp.module';
import { OtpService } from 'modules/otp/otp.service';

dotenv.config();

@Module({
  imports: [PassportModule, JwtModule.register({}), OtpModule],
  providers: [
    AuthService,
    LocalStrategy,
    AuthResolver,
    JwtStrategy,
    PrismaService,
    OtpService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
