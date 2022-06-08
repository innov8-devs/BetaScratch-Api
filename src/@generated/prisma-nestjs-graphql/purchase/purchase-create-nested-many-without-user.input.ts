import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseCreateWithoutUserInput } from './purchase-create-without-user.input';
import { PurchaseCreateOrConnectWithoutUserInput } from './purchase-create-or-connect-without-user.input';
import { PurchaseCreateManyUserInputEnvelope } from './purchase-create-many-user-input-envelope.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';

@InputType()
export class PurchaseCreateNestedManyWithoutUserInput {

    @Field(() => [PurchaseCreateWithoutUserInput], {nullable:true})
    create?: Array<PurchaseCreateWithoutUserInput>;

    @Field(() => [PurchaseCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<PurchaseCreateOrConnectWithoutUserInput>;

    @Field(() => PurchaseCreateManyUserInputEnvelope, {nullable:true})
    createMany?: PurchaseCreateManyUserInputEnvelope;

    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    connect?: Array<PurchaseWhereUniqueInput>;
}
