import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutPurchasesInput } from './user-create-without-purchases.input';

@InputType()
export class UserCreateOrConnectWithoutPurchasesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPurchasesInput, {nullable:false})
    create!: UserCreateWithoutPurchasesInput;
}
