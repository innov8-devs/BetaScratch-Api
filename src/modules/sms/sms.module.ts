import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsResolver } from './sms.resolver';

@Module({
  exports: [SmsService],
  providers: [SmsService, SmsResolver],
})
export class SmsModule {}
