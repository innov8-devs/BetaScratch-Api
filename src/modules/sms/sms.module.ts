import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsResolver } from './sms.resolver';
import { PrismaService } from 'modules/prisma.service';

@Module({
  exports: [SmsService],
  providers: [SmsService, SmsResolver, PrismaService],
})
export class SmsModule {}
