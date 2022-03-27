import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [WalletResolver, WalletService, PrismaService],
  exports: [WalletService],
})
export class WalletModule {}
