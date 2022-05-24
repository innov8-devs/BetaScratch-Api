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
import {
  FlutterTransactionsResponse,
  FlutterTransactionsTimelineResponse,
} from './dto/response.dto';
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

  @Auth([ROLE.USER])
  @Query(() => Number)
  async checkTotalAmountSpent(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Number> {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    return await this.transactionService.checkTotalAmountSpent(user.id);
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

  @Auth([ROLE.ADMIN])
  @Query(() => [FlutterTransactionsResponse])
  async fetchFlutterTransactions(
    @Args('from') from: string,
    @Args('to') to: string,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    return await this.transactionService.fetchFlutterTransactions(from, to);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => FlutterTransactionsTimelineResponse)
  async fetchFlutterTransactionTimeline(
    @Args('transaction_id') transaction_Id: number,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    return await this.transactionService.fetchFlutterTransactionTimeline(
      transaction_Id,
    );
  }
}
