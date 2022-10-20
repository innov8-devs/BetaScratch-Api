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
    let mobileNumber = userMobileNumber;
    console.log('Sending SMS');
    if (mobileNumber.includes('+')) mobileNumber = userMobileNumber.slice(1);
    console.log(mobileNumber);
    await this.sendSms({
      sms: 'You have played a game, check your message box on the website',
      to: userMobileNumber,
    });
  }
}
