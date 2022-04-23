import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import {
  InitiatePaymentInput,
  // VerifyTransactionInput,
} from './dto/request.dto';
import { TransactionService } from './transaction.service';

@Resolver()
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Auth([ROLE.USER])
  @Mutation(() => String)
  async initiatePayment(
    @Args('input') input: InitiatePaymentInput,
    @CurrentUser() user: User,
  ): Promise<String> {
    return await this.transactionService.initiatePayment(input, user);
  }

  // @Auth([ROLE.USER])
  // @Mutation(() => String)
  // async verifyTransaction(
  //   @Args('input') input: VerifyTransactionInput,
  //   @CurrentUser() user: User,
  // ): Promise<String> {
  //   return await this.transactionService.verifyTransaction(input, user.id);
  // }

  @Query(() => String)
  async checkTotalAmountSpent(@Args('userId') userId: string): Promise<Number> {
    return await this.transactionService.checkTotalAmountSpent(userId);
  }
}
