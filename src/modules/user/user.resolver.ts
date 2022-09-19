import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import {
  RegisterInput,
  UpdateUserInput,
  UserPaginationInput,
  ValidateFormOneInput,
  ValidateFormTwoInput,
} from './dto/user.request';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import {
  FetchUserReferralsResponse,
  TotalUserCount,
} from './dto/user.response';
import { AuthService } from 'modules/auth/auth.service';
import { MyContext } from 'types/constants/types';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  // Get logged in user
  @Auth()
  @Query(() => User, { nullable: true })
  async me(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<User> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return this.userService.me(user);
  }

  @Mutation(() => User)
  async register(@Args('input') input: RegisterInput): Promise<User> {
    return await this.userService.register(input);
  }

  @Mutation(() => Boolean)
  async confirmAccount(
    @Args('otp') otp: string,
    @Args('phoneNumberOrEmail') phoneNumberOrEmail: string,
  ): Promise<Boolean> {
    return await this.userService.confirmAccount(otp, phoneNumberOrEmail);
  }

  @Mutation(() => Boolean)
  async requestNewOtp(
    @Args('phoneNumberOrEmail') phoneNumberOrEmail: string,
  ): Promise<Boolean> {
    return await this.userService.requestNewOtp(phoneNumberOrEmail);
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Args('phoneNumberOrEmail') phoneNumerOrEmail: string,
  ): Promise<Boolean> {
    return await this.userService.forgotPassword(phoneNumerOrEmail);
  }

  @Mutation(() => Boolean)
  async forgotPasswordOtp(
    @Args('phoneNumberOrEmail') phoneNumerOrEmail: string,
    @Args('otp') otp: string,
  ): Promise<Boolean> {
    return await this.userService.forgotPasswordOtp(otp, phoneNumerOrEmail);
  }

  @Query(() => User)
  async getUserByPhonenumber(
    @Args('mobileNumber') mobileNumber: string,
  ): Promise<User> {
    return await this.userService.getUserByPhoneNumber(mobileNumber);
  }

  @Mutation(() => Boolean)
  async newPassword(
    @Args('otp') otp: string,
    @Args('phoneNumberOrEmail') phoneNumerOrEmail: string,
    @Args('password') password: string,
  ): Promise<Boolean> {
    return await this.userService.newPassword(otp, phoneNumerOrEmail, password);
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

  @Auth([ROLE.USER])
  @Mutation(() => User)
  async editAccount(
    @Args('input') input: UpdateUserInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<User> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.userService.editAccount(user.id, input);
  }

  @Auth([ROLE.USER])
  @Mutation(() => User)
  async resetAccountPassword(
    @Args('oldPassword') oldPassword: string,
    @Args('newPassword') newPassword: string,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<User> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.userService.resetAccountPassword(
      user,
      oldPassword,
      newPassword,
    );
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

  @Query(() => [User], { nullable: true })
  async findAllUsers(
    @Args('pagination', { nullable: true }) pagination?: UserPaginationInput,
  ): Promise<User[]> {
    return this.userService.findAllUsers(pagination);
  }

  @Query(() => TotalUserCount)
  async totalUserCount() {
    return await this.userService.totalUserCount();
  }

  @Query(() => User)
  async findOneUser(@Args('userId') userId: string) {
    return await this.userService.findUnique({ id: Number(userId) });
  }

  @Mutation(() => Boolean)
  async toggleUserConfirmationFromAdmin(@Args('userId') userId: number) {
    return await this.userService.toggleUserConfirmationFromAdmin(userId);
  }

  @Auth([ROLE.USER])
  @Query(() => FetchUserReferralsResponse, { nullable: true })
  async fetchUserReferrals(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.userService.fetchUserReferrals(user.id);
  }
}
