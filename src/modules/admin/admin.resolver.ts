import { Admin } from '@generated/prisma-nestjs-graphql/admin/admin.model';
import { FlutterwaveLog } from '@generated/prisma-nestjs-graphql/flutterwave-log/flutterwave-log.model';
import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Purchase } from '@generated/prisma-nestjs-graphql/purchase/purchase.model';
import { Transaction } from '@generated/prisma-nestjs-graphql/transaction/transaction.model';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import { WithdrawalRequest } from '@generated/prisma-nestjs-graphql/withdrawal-request/withdrawal-request.model';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'modules/auth/auth.service';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { DB_TYPES, GAME_STATUS } from 'types/constants/enum';
import { MyContext } from 'types/constants/types';
import { AdminService } from './admin.service';
import {
  ChangeVerificationRequestInput,
  EditUserPurchasesFromAdminInput,
  GetGamesFromAdminInput,
  GetPendingVerificationsFromAdminInput,
  GetTransactionsFromAdminInput,
  GetUserPurchasesFromAdminInput,
  GetUsersCountInput,
  GetUsersFromAdminInput,
  GetWalletsFromAdminInput,
  GetWithdrawlistFromAdminInput,
  PaginationInput,
  RegisterAdminInput,
  UpdateUserWalletInput,
} from './dto/admin.request';
import {
  DashboardDataResponse,
  FlutterTansactionResponse,
  FlutterTransactionsTimelineResponse,
  SortReturnData,
} from './dto/admin.response';

@Resolver()
export class AdminResolver {
  constructor(
    private readonly adminService: AdminService,
    private readonly authService: AuthService,
  ) {}
  // Get logged in user
  @Auth([ROLE.ADMIN])
  @Query(() => Admin, { nullable: true })
  async meAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Admin> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.meAdmin(user);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => DashboardDataResponse)
  async getDashboardData(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.getDashboardData();
  }
  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async createNewAdmin(@Args('input') input: RegisterAdminInput) {
    return await this.adminService.createNewAdmin(input);
  }
  @Query(() => Boolean)
  async confirmAdminToken(@Args('token') token: string) {
    return await this.adminService.confirmAdminToken(token);
  }
  @Mutation(() => Boolean)
  async resetNewAdminPassword(
    @Args('password') password: string,
    @Args('token') token: string,
  ) {
    return await this.adminService.resetNewAdminPassword(password, token);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => [User], { nullable: true })
  async getUsersFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: GetUsersFromAdminInput,
  ): Promise<User[]> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getUsersFromAdmin(input);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => User, { nullable: true })
  async getOneUserFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('userId') userId: number,
  ): Promise<User> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getOneUserFromAdmin(userId);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => [Wallet], { nullable: true })
  async getWalletsFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: GetWalletsFromAdminInput,
  ): Promise<Wallet[]> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getWalletsFromAdmin(input);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => [Transaction], { nullable: true })
  async getTransactionsFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: GetTransactionsFromAdminInput,
  ): Promise<Transaction[]> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getTransactionsFromAdmin(input);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => Wallet, { nullable: true })
  async getOneWalletFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('userId') userId: number,
  ): Promise<Wallet> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getOneWalletFromAdmin(userId);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => [Game], { nullable: true })
  async getGamesFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: GetGamesFromAdminInput,
  ): Promise<Game[]> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getGamesFromAdmin(input);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => Game, { nullable: true })
  async getOneGameFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('gameId') gameId: number,
  ): Promise<Game> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getOneGameFromAdmin(gameId);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => [Purchase], { nullable: true })
  async getUserPurchasesFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: GetUserPurchasesFromAdminInput,
  ): Promise<Purchase[]> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getUserPurchasesFromAdmin(input);
  }
  @Auth([ROLE.ADMIN])
  @Mutation(() => Purchase, { nullable: true })
  async editUserPurchaseStatusFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: EditUserPurchasesFromAdminInput,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.editUserPurchaseStatusFromAdmin(input);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => Number, { nullable: true })
  async getCount(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: GetUsersCountInput,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getCount(input);
  }
  @Auth([ROLE.ADMIN])
  @Mutation(() => Wallet, { nullable: true })
  async updateUserWallet(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: UpdateUserWalletInput,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.updateUserWallet(input);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => [WithdrawalRequest], { nullable: true })
  async getWithdrawRequestFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: GetWithdrawlistFromAdminInput,
  ): Promise<WithdrawalRequest[]> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getWithdrawRequestFromAdmin(input);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => [User], { nullable: true })
  async getPendingVerificationsFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: GetPendingVerificationsFromAdminInput,
  ): Promise<User[]> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getPendingVerificationsFromAdmin(input);
  }
  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean, { nullable: true })
  async changeVerificationStatus(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: ChangeVerificationRequestInput,
  ): Promise<Boolean> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.changeVerificationStatus(input);
  }
  @Auth([ROLE.ADMIN])
  @Query(() => [Admin], { nullable: true })
  async getAdminList(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('input') input: PaginationInput,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.getAdminList(input);
  }
  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean, { nullable: true })
  async toggleGameStatus(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('id') id: number,
    @Args('status') status: GAME_STATUS,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    await this.adminService.toggleGameStatus(id, status);
    return true;
  }
  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean, { nullable: true })
  async toggleCardPlayedStatus(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('id') id: number,
    @Args('played') played: boolean,
    @Args('parentId', { nullable: true }) parentId: number,
    @Args('parentStatus', { nullable: true }) parentStatus: string,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    await this.adminService.toggleCardPlayedStatus(
      id,
      played,
      parentId,
      parentStatus,
    );
    return true;
  }
  @Mutation(() => Boolean)
  async resetPurchases() {
    await this.adminService.resetPurchases();
    return true;
  }
  @Auth([ROLE.ADMIN])
  @Query(() => [FlutterTansactionResponse])
  async getFlutterwaveTransactions(
    @Args('from') from: string,
    @Args('to') to: string,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<FlutterTansactionResponse[]> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.getFlutterwaveTransactions(from, to);
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async updateAdminPersonalInformation(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Boolean> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.updateAdminPersonalInformation(
      firstName,
      lastName,
      user.id,
    );
  }
  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async updateAdminPassword(
    @Args('oldPassword') oldPassword: string,
    @Args('newPassword') newPassword: string,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Boolean> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.updateAdminPassword(
      oldPassword,
      newPassword,
      user.id,
    );
  }
  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async toggleUserAccountDisalility(
    @Args('userId') userId: number,
    @Args('disabled') disabled: boolean,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Boolean> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.toggleUserAccountDisalility(
      userId,
      disabled,
    );
  }

  @Auth([ROLE.ADMIN])
  @Query(() => [SortReturnData])
  async adminSearch(
    @Args('table') table: DB_TYPES,
    @Args('search') search: string,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.adminSearch(table, search);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => [FlutterwaveLog])
  async getFlutterwaveLogs(
    @Args('input') input: PaginationInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.getFlutterwaveLogs(input);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => FlutterTransactionsTimelineResponse)
  async fetchFlutterTransactionTimeline(
    @Args('transaction_id') transaction_Id: string,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.fetchFlutterTransactionTimeline(
      transaction_Id,
    );
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async confirmBankPurchase(
    @Args('id') id: number,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.confirmBankPurchase(id);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => FlutterTransactionsTimelineResponse)
  async fetchBankTransferPurchase(
    @Args('input') input: PaginationInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return await this.adminService.fetchBankTransferPurchase(input);
  }

  @Mutation(() => Boolean)
  async run() {
    await this.adminService.run();
  }
}
