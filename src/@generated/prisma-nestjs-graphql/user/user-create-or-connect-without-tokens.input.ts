import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTokensInput } from './user-create-without-tokens.input';

@InputType()
export class UserCreateOrConnectWithoutTokensInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTokensInput, {nullable:false})
    create!: UserCreateWithoutTokensInput;
}
