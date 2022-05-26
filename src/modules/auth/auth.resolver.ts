import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { parseCookies } from 'helpers/parseCookie';
import { LoginInput } from 'modules/user/dto/user.request';
import { MyContext } from 'types/constants/types';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import jwt_decode from 'jwt-decode';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => Boolean)
  async generateAccessToken(@Context() { req, res }: MyContext) {
    const cookieObject = parseCookies(req);
    if (!cookieObject.refresh_token) return false;
    let decoded: { sub: number; iat: number; exp: number } = jwt_decode(
      cookieObject.refresh_token,
    );
    if (Date.now() >= decoded.exp * 1000) return false;
    await this.authService.setAccessTokenHeaderCredentials(decoded.sub, res);
    await this.authService.setRefreshTokenHeaderCredentials(decoded.sub, res);
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

  @Mutation(() => Boolean)
  async requestAdminLoginOtp(@Args('input') input: LoginInput) {
    return this.authService.requestAdminLoginOtp(input);
  }

  @UseGuards(LocalAuthGuard)
  @Mutation(() => User)
  async adminLogin(
    @Args('input') _input: LoginInput,
    @Args('otp') otp: string,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    if (user) {
      await this.authService.setAccessTokenHeaderCredentials(user.id, res);
      await this.authService.setRefreshTokenHeaderCredentials(user.id, res);
    }
    const { auth } = await this.authService.adminLogin(user, otp);
    return auth;
  }
}
