import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutPurchaseInput } from './user-create-without-purchase.input';

@InputType()
export class UserCreateOrConnectWithoutPurchaseInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPurchaseInput, {nullable:false})
    create!: UserCreateWithoutPurchaseInput;
}
