import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCartInput } from './user-create-without-cart.input';

@InputType()
export class UserCreateOrConnectWithoutCartInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCartInput, {nullable:false})
    create!: UserCreateWithoutCartInput;
}
