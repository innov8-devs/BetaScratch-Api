// import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Args, Query, Resolver } from '@nestjs/graphql';
// import { Auth } from 'modules/auth/decorators/auth.decorator';
import { SendBulkSmsParams } from './dto/sms-params.dto';
import { SmsService } from './sms.service';

@Resolver()
export class SmsResolver {
  constructor(private readonly smsService: SmsService) {}
  // @Auth([ROLE.ADMIN])
  @Query(() => Boolean)
  async sendSms(@Args('input') input: SendBulkSmsParams) {
    return await this.smsService.sendSms(input);
  }
}
