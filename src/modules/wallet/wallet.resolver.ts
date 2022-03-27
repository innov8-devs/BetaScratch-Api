import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WalletService } from './wallet.service';
import {
  CashBackTransactionInput,
  DeductUserBalanceInput,
} from './dto/request.dto';
import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';

@Resolver(() => Wallet)
export class WalletResolver {
  constructor(private readonly walletService: WalletService) {}

  @Auth([ROLE.USER])
  @Query(() => Wallet, { nullable: true })
  async getUserBalance(@CurrentUser() user: User) {
    return await this.walletService.getUserBalance(user.id);
  }

  @Auth([ROLE.USER])
  @Mutation(() => Boolean)
  async deductUserBalance(
    @Args('input') input: DeductUserBalanceInput,
    @CurrentUser() user: User,
  ) {
    return this.walletService.deductUserBalance(input, user.id);
  }

  @Auth([ROLE.USER])
  @Mutation(() => Boolean)
  async cashBack(
    @Args('input') input: CashBackTransactionInput,
    @CurrentUser() user: User,
  ) {
    return this.walletService.cashBack(input, user.id);
  }
}
