import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRefferalInput } from './user-create-without-refferal.input';
import { UserCreateOrConnectWithoutRefferalInput } from './user-create-or-connect-without-refferal.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRefferalInput {

    @Field(() => UserCreateWithoutRefferalInput, {nullable:true})
    create?: UserCreateWithoutRefferalInput;

    @Field(() => UserCreateOrConnectWithoutRefferalInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutRefferalInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
