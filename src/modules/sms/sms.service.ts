import { Injectable } from '@nestjs/common';
import { PrismaService } from 'modules/prisma.service';
import { SmsResponse } from './dto/response.dto';
var request = require('request');

@Injectable()
export class SmsService {
  constructor(private readonly prismaService: PrismaService) {}

  async initiateSms(input: {
    to: string | string[];
    sms: string;
  }): Promise<SmsResponse> {
    const { sms, to } = input;
    var data = {
      to,
      sms,
      from: 'Betascratch',
      type: 'plain',
      api_key: process.env.TERMII_API_KEY,
      channel: 'generic',
    };
    var options = {
      method: 'POST',
      url: 'https://api.ng.termii.com/api/sms/send',
      headers: {
        'Content-Type': ['application/json', 'application/json'],
      },
      body: JSON.stringify(data),
    };
    return request(options, (error: any, response: any) => {
      if (error) {
        console.log(error);
      }
      return response.body;
    });
  }

  public async sendCheckoutSms(userMobileNumber: string) {
    await this.initiateSms({
      sms: 'Congratulations you just purchased a Game to Play and Win. Click the Link to Play Instantly https://betascratch.com/account/messages',
      to: userMobileNumber,
    });
  }

  public async sendSms(input: { to?: string[]; sms: string }) {
    const { sms, to } = input;
    if (!to) {
      const phoneNumberTo: string[] = [];
      const userPhoneNumbers = await this.prismaService.user.findMany({
        select: {
          mobileNumber: true,
        },
      });
      for (let phoneNumber of userPhoneNumbers) {
        phoneNumberTo.push(phoneNumber.mobileNumber);
      }
      await this.initiateSms({
        sms,
        to: phoneNumberTo,
      });
      return true;
    } else {
      await this.initiateSms({
        sms,
        to,
      });
      return true;
    }
  }
}
