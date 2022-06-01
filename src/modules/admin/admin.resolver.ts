import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'modules/auth/auth.service';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { MyContext } from 'types/constants/types';
import { AdminService } from './admin.service';
import {
  GetUsersFromAdminInput,
  RegisterAdminInput,
} from './dto/admin.request';

@Resolver()
export class AdminResolver {
  constructor(
    private readonly adminService: AdminService,
    private readonly authService: AuthService,
  ) {}

  // Get logged in user
  @Auth()
  @Query(() => User, { nullable: true })
  async meAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<User> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
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
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    return this.adminService.getUsersFromAdmin(input);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => User, { nullable: true })
  async getOneUserFromAdmin(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
    @Args('userId') userId: number,
  ): Promise<User> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    return this.adminService.getOneUserFromAdmin(userId);
  }
}
