import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { PrismaService } from 'modules/prisma.service';
import { MailService } from 'modules/mail/mail.service';
import { TokenService } from 'modules/token/token.service';
import { AuthService } from 'modules/auth/auth.service';
import { AuthModule } from 'modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, JwtModule.register({})],
  providers: [
    AdminResolver,
    AdminService,
    PrismaService,
    MailService,
    TokenService,
    AuthService,
  ],
})
export class AdminModule {}
