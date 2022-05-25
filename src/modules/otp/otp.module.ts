import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'modules/prisma.service';
import { OtpService } from './otp.service';

@Global()
@Module({
  providers: [OtpService, PrismaService],
  exports: [OtpService],
})
export class OtpModule {}
