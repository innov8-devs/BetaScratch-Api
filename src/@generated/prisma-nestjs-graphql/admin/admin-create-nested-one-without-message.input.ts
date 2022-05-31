import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutMessageInput } from './admin-create-without-message.input';
import { AdminCreateOrConnectWithoutMessageInput } from './admin-create-or-connect-without-message.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@InputType()
export class AdminCreateNestedOneWithoutMessageInput {

    @Field(() => AdminCreateWithoutMessageInput, {nullable:true})
    create?: AdminCreateWithoutMessageInput;

    @Field(() => AdminCreateOrConnectWithoutMessageInput, {nullable:true})
    connectOrCreate?: AdminCreateOrConnectWithoutMessageInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    connect?: AdminWhereUniqueInput;
}
