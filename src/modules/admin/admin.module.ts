import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { PrismaService } from 'modules/prisma.service';
import { MailService } from 'modules/mail/mail.service';
import { TokenService } from 'modules/token/token.service';

@Module({
  providers: [
    AdminResolver,
    AdminService,
    PrismaService,
    MailService,
    TokenService,
  ],
})
export class AdminModule {}
