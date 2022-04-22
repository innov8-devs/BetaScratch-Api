import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import config from './config';
import { GqlConfigService } from 'config/graphql';
import { AuthModule } from 'modules/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { GameModule } from './modules/game/game.module';
import { TransactionModule } from 'modules/transaction/transaction.module';
import { MailModule } from 'modules/mail/mail.module';
import { TokenModule } from 'modules/token/token.module';
import { OtpModule } from 'modules/otp/otp.module';
import { TesstModule } from './tesst/tesst.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    AuthModule,
    GameModule,
    GameModule,
    MailModule,
    UserModule,
    TokenModule,
    WalletModule,
    OtpModule,
    TransactionModule,
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    MulterModule.register({ dest: '../uploads' }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    TesstModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
