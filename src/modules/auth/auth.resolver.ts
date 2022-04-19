import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginInput } from 'modules/user/dto/user.request';
import { MyContext } from 'types/constants/types';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthResponse } from './dto/auth.response.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Auth()
  @Query(() => Boolean)
  async generateAccessToken(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    await this.authService.setRefreshTokenHeaderCredentials(user.id, res);
    return true;
  }

  @UseGuards(LocalAuthGuard)
  @Mutation(() => User)
  async login(
    @Args('input') _input: LoginInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    await this.authService.setRefreshTokenHeaderCredentials(user.id, res);
    const { auth } = await this.authService.login(user);
    return auth;
  }

  @UseGuards(LocalAuthGuard)
  @Mutation(() => AuthResponse)
  async adminLogin(
    @Args('input') _input: LoginInput,
    @CurrentUser() user: User,
  ) {
    const { auth } = await this.authService.adminLogin(user);
    return auth;
  }
}
