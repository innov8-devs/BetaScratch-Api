import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutTokenInput } from './admin-create-without-token.input';
import { AdminCreateOrConnectWithoutTokenInput } from './admin-create-or-connect-without-token.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@InputType()
export class AdminCreateNestedOneWithoutTokenInput {

    @Field(() => AdminCreateWithoutTokenInput, {nullable:true})
    create?: AdminCreateWithoutTokenInput;

    @Field(() => AdminCreateOrConnectWithoutTokenInput, {nullable:true})
    connectOrCreate?: AdminCreateOrConnectWithoutTokenInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    connect?: AdminWhereUniqueInput;
}
