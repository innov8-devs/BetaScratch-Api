import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { PrismaService } from 'modules/prisma.service';
import { MailService } from 'modules/mail/mail.service';
import { TokenService } from 'modules/token/token.service';
import { AuthService } from 'modules/auth/auth.service';
import { AuthModule } from 'modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { TransactionService } from 'modules/transaction/transaction.service';
import { TransactionModule } from 'modules/transaction/transaction.module';
import { MessageModule } from 'modules/message/message.module';

@Module({
  imports: [
    AuthModule,
    JwtModule.register({}),
    TransactionModule,
    MessageModule,
  ],
  providers: [
    AdminResolver,
    AdminService,
    PrismaService,
    MailService,
    TokenService,
    AuthService,
    TransactionService,
  ],
})
export class AdminModule {}
