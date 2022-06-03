import { Admin } from '@generated/prisma-nestjs-graphql/admin/admin.model';
import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'modules/auth/auth.service';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { MyContext } from 'types/constants/types';
import { AdminService } from './admin.service';
import {
  GetGamesFromAdminInput,
  GetUsersCountInput,
  GetUsersFromAdminInput,
  GetWalletsFromAdminInput,
  RegisterAdminInput,
  UpdateUserWalletInput,
} from './dto/admin.request';

@Resolver()
export class AdminResolver {
  constructor(
    private readonly adminService: AdminService,
    private readonly authService: AuthService,
  ) {}

  // Get logged in user
  @Auth()
  @Query(() => Admin, { nullable: true })
  async meAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Admin> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, true);
    return this.adminService.meAdmin(user);
  }

  @Query(() => Boolean)
  async getDashboardData() {
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
}
