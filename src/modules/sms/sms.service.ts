import { Injectable } from '@nestjs/common';
import { SmsResponse } from './dto/response.dto';
var request = require('request');

@Injectable()
export class SmsService {
  async sendSms(input: {
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
    await this.sendSms({
      sms: 'Congratulations you just purchased a Game to Play and Win. Click the Link to Play Instantly https://betascratch.com/account/messages',
      to: userMobileNumber,
    });
  }

  public async sendBulkSms(input: { to: string[]; sms: string }) {
    const { sms, to } = input;
    await this.sendSms({
      sms,
      to,
    });
    return true;
  }
}
