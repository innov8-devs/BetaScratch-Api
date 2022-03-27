import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from 'modules/user/dto/user.request';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthResponse } from './dto/auth.response.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => AuthResponse)
  async login(@Args('input') _input: LoginInput, @CurrentUser() user: User) {
    const { auth } = await this.authService.login(user);
    return auth;
  }
}
