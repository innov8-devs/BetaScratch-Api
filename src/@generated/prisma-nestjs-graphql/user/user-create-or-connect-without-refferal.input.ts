import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutRefferalInput } from './user-create-without-refferal.input';

@InputType()
export class UserCreateOrConnectWithoutRefferalInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRefferalInput, {nullable:false})
    create!: UserCreateWithoutRefferalInput;
}
