// import sgMail from '@sendgrid/mail';
// const sgMail = require('@sendgrid/mail');
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailParams } from './dto/mail-params.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(input: SendMailParams) {
    const { html, subject, to } = input;
    await this.mailerService.sendMail({
      to,
      html,
      subject,
    });
  }

  // async sendMail(input: SendMailParams) {
  //   const { html, subject, to } = input;

  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //   const msg = {
  //     to,
  //     from: 'betascratchinc@gmail.com',
  //     subject,
  //     html,
  //   };
  //   sgMail
  //     .send(msg)
  //     .then(() => console.log('send mail success'))
  //     .catch(console.log);
  // }
}
