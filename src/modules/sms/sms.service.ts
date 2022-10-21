import { Injectable } from '@nestjs/common';
import { SmsResponse } from './dto/response.dto';
import { SendSmsParams } from './dto/sms-params.dto';
var request = require('request');

@Injectable()
export class SmsService {
  async sendSms(input: SendSmsParams): Promise<SmsResponse> {
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
    console.log('Sending SMS');
    await this.sendSms({
      sms: 'Congratulations you just purchased a Game to Play and Win. Click the Link to Play Instantly https://betascratch.com/account/messages',
      to: userMobileNumber,
    });
  }
}
