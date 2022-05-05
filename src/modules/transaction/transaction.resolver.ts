import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Transaction } from '@generated/prisma-nestjs-graphql/transaction/transaction.model';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'modules/auth/auth.service';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { MyContext } from 'types/constants/types';
import {
  InitiatePaymentInput,
  TransactionHistoryInput,
} from './dto/request.dto';
import { TransactionService } from './transaction.service';

@Resolver()
export class TransactionResolver {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly authService: AuthService,
  ) {}

  @Auth([ROLE.USER])
  @Mutation(() => String)
  async initiatePayment(
    @Args('input') input: InitiatePaymentInput,
    @CurrentUser() user: User,
  ): Promise<String> {
    return await this.transactionService.initiatePayment(input, user);
  }

  @Query(() => String)
  async checkTotalAmountSpent(@Args('userId') userId: string): Promise<Number> {
    return await this.transactionService.checkTotalAmountSpent(userId);
  }

  @Auth([ROLE.USER])
  @Query(() => [Transaction])
  async transactionHistory(
    @Args('input') input: TransactionHistoryInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    return await this.transactionService.transactionHistory(user.id, input);
  }
}
