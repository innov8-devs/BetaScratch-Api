import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserCreateInput } from '../../@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import {
  UserPaginationInput,
  ValidateFormOneInput,
  ValidateFormTwoInput,
} from './dto/user.request';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // Get logged in user
  @Auth()
  @Query(() => User, { nullable: true })
  async me(@CurrentUser() user: User): Promise<User> {
    return this.userService.me(user);
  }

  @Mutation(() => User)
  async register(@Args('input') input: UserCreateInput): Promise<User> {
    return await this.userService.register(input);
  }

  // @Mutation(() => User)
  // async adminLogin(
  //   @Args('input') input: AdminLoginInput,
  //   @CurrentUser() user: User,
  // ): Promise<User> {
  //   return await this.userService.adminLogin(input, user.id);
  // }

  // Logout a user
  // @Mutation(() => Boolean)
  // async logout(
  //   @CurrentUser() user: User
  //   ): Promise<Boolean> {
  //   return this.userService.logout(user.id, res);
  // }

  @Mutation(() => Boolean)
  async confirmAccount(
    @Args('otp') otp: string,
    @Args('phoneNumberOrEmail') phoneNumberOrEmail: string,
  ): Promise<Boolean> {
    return await this.userService.confirmAccount(otp, phoneNumberOrEmail);
  }

  // @Mutation(() => Boolean)
  // async forgotPassword(
  //   @Args('email') email: string,
  //   @Context() { redis }: MyContext,
  // ): Promise<Boolean> {
  //   return await this.userService.forgotPassword(email, redis);
  // }

  // @Mutation(() => Boolean)
  // async resetPassword(
  //   @Args('input') input: ChangePasswordInput,
  //   @Context() { redis, req }: MyContext,
  // ): Promise<Boolean> {
  //   return await this.userService.resetPassword(input, redis, req);
  // }

  @Mutation(() => Boolean)
  async requestNewOtp(@Args('email') email: string): Promise<Boolean> {
    return await this.userService.requestNewOtp(email);
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Args('email') email: string): Promise<Boolean> {
    return await this.userService.forgotPassword(email);
  }

  @Mutation(() => Boolean)
  async forgotPasswordOtp(
    @Args('email') email: string,
    @Args('otp') otp: string,
  ): Promise<Boolean> {
    return await this.userService.forgotPasswordOtp(otp, email);
  }

  @Mutation(() => Boolean)
  async newPassword(
    @Args('otp') otp: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<Boolean> {
    return await this.userService.newPassword(otp, email, password);
  }

  @Mutation(() => Boolean)
  async validateRegistrationFormOne(
    @Args('input') input: ValidateFormOneInput,
  ): Promise<Boolean> {
    return await this.userService.validateRegistrationFormOne(input);
  }

  @Mutation(() => Boolean)
  async validateRegistrationFormTwo(
    @Args('input') input: ValidateFormTwoInput,
  ): Promise<Boolean> {
    return await this.userService.validateRegistrationFormTwo(input);
  }

  @Query(() => User, { nullable: true })
  async logout(@CurrentUser() user: User): Promise<User> {
    return this.userService.me(user);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => [User], { nullable: true })
  async getAllRegisteredUsers(): Promise<User[]> {
    return this.userService.getAllRegisteredUser();
  }

  @Mutation(() => Boolean)
  async queryRefetchHelper() {
    return true;
  }

  @Query(() => [User], { nullable: true })
  async findAllUsers(
    @Args('pagination', { nullable: true }) pagination?: UserPaginationInput,
  ): Promise<User[]> {
    return this.userService.findAllUsers(pagination);
  }
}
