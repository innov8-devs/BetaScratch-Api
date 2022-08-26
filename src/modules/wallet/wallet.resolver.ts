import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { WalletService } from './wallet.service';
import {
  CashBackTransactionInput,
  ChangeUserWithdrawalRequestInput,
  DeductUserBalanceInput,
  TransferFromWalletInput,
  WithdrawalRequestPaginationInput,
} from './dto/request.dto';
import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { WithdrawalRequestCreateInput } from '@generated/prisma-nestjs-graphql/withdrawal-request/withdrawal-request-create.input';
import { WithdrawalRequest } from '@generated/prisma-nestjs-graphql/withdrawal-request/withdrawal-request.model';
import { MyContext } from 'types/constants/types';
import { AuthService } from 'modules/auth/auth.service';
// import { PAYMENT_PURPOSE } from 'types/constants/enum';

@Resolver(() => Wallet)
export class WalletResolver {
  constructor(
    private readonly walletService: WalletService,
    private readonly authService: AuthService,
  ) {}

  @Auth([ROLE.USER])
  @Query(() => Wallet, { nullable: true })
  async getUserBalance(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.walletService.getUserBalance(user.id);
  }

  @Auth([ROLE.USER])
  @Query(() => Boolean, { nullable: true })
  async transferFromWallet(
    @Args('input') input: TransferFromWalletInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.walletService.transferFromWallet(input, user.id);
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async deductUserBalance(@Args('input') input: DeductUserBalanceInput) {
    await this.walletService.deductUserBalance(input);
    return true;
  }

  @Auth([ROLE.USER])
  @Mutation(() => Boolean)
  async cashBack(
    @Args('input') input: CashBackTransactionInput,
    @CurrentUser() user: User,
  ) {
    return this.walletService.cashBack(input, user.id);
  }

  @Auth([ROLE.USER])
  @Mutation(() => Boolean)
  async sendWithdrawalOtp(@Args('userId') userId: string) {
    return await this.walletService.sendWithDrawalOtp(Number(userId));
  }

  @Auth([ROLE.USER])
  @Mutation(() => Boolean)
  async recordWithdrawalRequest(
    @Args('input') input: WithdrawalRequestCreateInput,
    @Context() { res }: MyContext,
    @CurrentUser() user: User,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.walletService.recordWithdrawalRequest(input, user.id);
  }

  @Query(() => [WithdrawalRequest])
  async getAllWithdrawalRequests(
    @Args('pagination', { nullable: true })
    pagination?: WithdrawalRequestPaginationInput,
  ) {
    return await this.walletService.getAllWithdrawalRequest(pagination);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => Number)
  async getTotalWalletBalance() {
    return await this.walletService.getTotalWalletBalance();
  }

  @Auth([ROLE.ADMIN])
  @Query(() => Number)
  async getTotalBonusBalance() {
    return await this.walletService.getTotalBonusBalance();
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async changeWithdrawalStatus(
    @Args('input') input: ChangeUserWithdrawalRequestInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    await this.walletService.changeWithdrawalStatus(input);
    return true;
  }

  // @Auth([ROLE.USER])
  // @Mutation(() => User)
  // async deposit(
  //   @Args('transaction_id') transaction_id: number,
  //   @Args('test', { nullable: true, defaultValue: false }) test: boolean,
  //   @CurrentUser() user: User,
  //   @Context() { res }: MyContext,
  // ) {
  //   await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
  //   return await this.walletService.deposit(
  //     transaction_id,
  //     PAYMENT_PURPOSE.DEPOSIT,
  //     user.id,
  //     test,
  //   );
  // }
}
