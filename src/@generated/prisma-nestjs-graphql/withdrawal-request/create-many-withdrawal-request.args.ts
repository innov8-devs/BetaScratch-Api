import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestCreateManyInput } from './withdrawal-request-create-many.input';

@ArgsType()
export class CreateManyWithdrawalRequestArgs {

    @Field(() => [WithdrawalRequestCreateManyInput], {nullable:false})
    data!: Array<WithdrawalRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
