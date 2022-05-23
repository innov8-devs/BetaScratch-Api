import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRefferalInput } from './user-create-without-refferal.input';
import { UserCreateOrConnectWithoutRefferalInput } from './user-create-or-connect-without-refferal.input';
import { UserUpsertWithoutRefferalInput } from './user-upsert-without-refferal.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRefferalInput } from './user-update-without-refferal.input';

@InputType()
export class UserUpdateOneRequiredWithoutRefferalInput {

    @Field(() => UserCreateWithoutRefferalInput, {nullable:true})
    create?: UserCreateWithoutRefferalInput;

    @Field(() => UserCreateOrConnectWithoutRefferalInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutRefferalInput;

    @Field(() => UserUpsertWithoutRefferalInput, {nullable:true})
    upsert?: UserUpsertWithoutRefferalInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRefferalInput, {nullable:true})
    update?: UserUpdateWithoutRefferalInput;
}
