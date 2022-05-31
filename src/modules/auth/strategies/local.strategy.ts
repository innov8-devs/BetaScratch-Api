import { MESSAGES } from 'core/messages';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'phoneNumberOrEmail' });
  }

  async validate(phoneNumberOrEmail: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(
      phoneNumberOrEmail,
      password,
    );
    if (!user)
      throw new UnauthorizedException(MESSAGES.AUTH.INVALID_CREDENTIALS);

    return user;
  }
}
