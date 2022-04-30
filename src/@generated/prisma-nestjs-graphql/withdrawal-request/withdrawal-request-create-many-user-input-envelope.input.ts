import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestCreateManyUserInput } from './withdrawal-request-create-many-user.input';

@InputType()
export class WithdrawalRequestCreateManyUserInputEnvelope {

    @Field(() => [WithdrawalRequestCreateManyUserInput], {nullable:false})
    data!: Array<WithdrawalRequestCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
