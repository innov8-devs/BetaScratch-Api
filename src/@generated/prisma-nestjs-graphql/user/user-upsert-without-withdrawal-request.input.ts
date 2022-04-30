import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWithdrawalRequestInput } from './user-update-without-withdrawal-request.input';
import { UserCreateWithoutWithdrawalRequestInput } from './user-create-without-withdrawal-request.input';

@InputType()
export class UserUpsertWithoutWithdrawalRequestInput {

    @Field(() => UserUpdateWithoutWithdrawalRequestInput, {nullable:false})
    update!: UserUpdateWithoutWithdrawalRequestInput;

    @Field(() => UserCreateWithoutWithdrawalRequestInput, {nullable:false})
    create!: UserCreateWithoutWithdrawalRequestInput;
}
