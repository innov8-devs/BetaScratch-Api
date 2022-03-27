import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from '../prisma.service';
import { WalletModule } from 'modules/wallet/wallet.module';
import { WalletService } from 'modules/wallet/wallet.service';

@Module({
  imports: [WalletModule],
  providers: [
    TransactionResolver,
    TransactionService,
    PrismaService,
    WalletService,
  ],
  exports: [TransactionService],
})
export class TransactionModule {}
