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
}
