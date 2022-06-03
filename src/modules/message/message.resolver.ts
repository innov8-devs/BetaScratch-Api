import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'modules/auth/auth.service';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { MyContext } from 'types/constants/types';
import { GetUserMessagesResponse } from './dto/message.response';
import { MessageService } from './message.service';

@Resolver()
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    private readonly authService: AuthService,
  ) {}

  @Auth([ROLE.USER])
  @Mutation(() => Boolean)
  async changeMessageToRead(
    @Args('messageId') messageId: number,
    @Context() { res }: MyContext,
    @CurrentUser() user: User,
  ): Promise<Boolean> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.messageService.changeMessageToRead(messageId);
  }

  @Auth([ROLE.USER])
  @Mutation(() => GetUserMessagesResponse)
  async getUserMessages(
    @Context() { res }: MyContext,
    @CurrentUser() user: User,
  ): Promise<GetUserMessagesResponse> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.messageService.getUserMessages(user.id);
  }
}
