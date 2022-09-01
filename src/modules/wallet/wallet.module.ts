import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
import { PrismaService } from '../prisma.service';
import { OtpModule } from 'modules/otp/otp.module';
import { MailModule } from 'modules/mail/mail.module';
import { AuthModule } from 'modules/auth/auth.module';
import { AuthService } from 'modules/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TransactionModule } from 'modules/transaction/transaction.module';
import { TransactionService } from 'modules/transaction/transaction.service';
import { MessageModule } from 'modules/message/message.module';
import { ChatModule } from 'modules/chat/chat.module';

@Module({
  imports: [
    OtpModule,
    MailModule,
    AuthModule,
    TransactionModule,
    MessageModule,
    ChatModule,
    JwtModule.register({}),
  ],
  providers: [
    WalletResolver,
    WalletService,
    PrismaService,
    AuthService,
    TransactionService,
  ],
  exports: [WalletService],
})
export class WalletModule {}
