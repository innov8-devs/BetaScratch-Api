import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyUserInput } from './transaction-create-many-user.input';

@InputType()
export class TransactionCreateManyUserInputEnvelope {

    @Field(() => [TransactionCreateManyUserInput], {nullable:false})
    data!: Array<TransactionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
