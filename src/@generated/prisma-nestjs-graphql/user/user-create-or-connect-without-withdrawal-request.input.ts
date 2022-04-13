import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutWithdrawalRequestInput } from './user-create-without-withdrawal-request.input';

@InputType()
export class UserCreateOrConnectWithoutWithdrawalRequestInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutWithdrawalRequestInput, {nullable:false})
    create!: UserCreateWithoutWithdrawalRequestInput;
}
