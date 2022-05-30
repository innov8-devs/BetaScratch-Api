import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTokenInput } from './user-create-without-token.input';

@InputType()
export class UserCreateOrConnectWithoutTokenInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTokenInput, {nullable:false})
    create!: UserCreateWithoutTokenInput;
}
