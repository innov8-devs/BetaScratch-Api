import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { parseCookies } from 'helpers/parseCookie';
import {
  AdminLoginInput,
  AdminLoginOtpInput,
  LoginInput,
} from 'modules/user/dto/user.request';
import { MyContext } from 'types/constants/types';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import jwt_decode from 'jwt-decode';
import { Admin } from '@generated/prisma-nestjs-graphql/admin/admin.model';
import { authTypeSetterFn } from 'utils/authType';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => Boolean)
  async generateAccessToken(@Context() { req, res }: MyContext) {
    const cookieObject = parseCookies(req);
    console.log(cookieObject);
    if (!cookieObject.beta_refresh_token) return false;
    let decoded: { sub: number; iat: number; exp: number; isAdmin: boolean } =
      jwt_decode(cookieObject.beta_refresh_token);
    if (Date.now() >= decoded.exp * 1000) return false;
    if (decoded.isAdmin) authTypeSetterFn(true);
    else authTypeSetterFn(false);
    await this.authService.setAccessTokenHeaderCredentials(
      decoded.sub,
      res,
      decoded.isAdmin,
    );
    await this.authService.setRefreshTokenHeaderCredentials(
      decoded.sub,
      res,
      decoded.isAdmin,
    );
    return true;
  }

  @UseGuards(LocalAuthGuard)
  @Mutation(() => User)
  async login(
    @Args('input') input: LoginInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    await this.authService.setRefreshTokenHeaderCredentials(
      user.id,
      res,
      false,
    );
    return await this.authService.login(input);
  }

  @Mutation(() => Boolean)
  async requestAdminLoginOtp(@Args('input') input: AdminLoginOtpInput) {
    return this.authService.requestAdminLoginOtp(input);
  }

  @UseGuards(LocalAuthGuard)
  @Mutation(() => Admin)
  async adminLogin(
    @Args('input') input: AdminLoginInput,
    @CurrentUser() admin: Admin,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(admin.id, res, true);
    await this.authService.setRefreshTokenHeaderCredentials(
      admin.id,
      res,
      true,
    );
    return await this.authService.adminLogin(input);
  }
}
