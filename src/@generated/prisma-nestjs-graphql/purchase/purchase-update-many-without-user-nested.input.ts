import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseCreateWithoutUserInput } from './purchase-create-without-user.input';
import { PurchaseCreateOrConnectWithoutUserInput } from './purchase-create-or-connect-without-user.input';
import { PurchaseUpsertWithWhereUniqueWithoutUserInput } from './purchase-upsert-with-where-unique-without-user.input';
import { PurchaseCreateManyUserInputEnvelope } from './purchase-create-many-user-input-envelope.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseUpdateWithWhereUniqueWithoutUserInput } from './purchase-update-with-where-unique-without-user.input';
import { PurchaseUpdateManyWithWhereWithoutUserInput } from './purchase-update-many-with-where-without-user.input';
import { PurchaseScalarWhereInput } from './purchase-scalar-where.input';

@InputType()
export class PurchaseUpdateManyWithoutUserNestedInput {

    @Field(() => [PurchaseCreateWithoutUserInput], {nullable:true})
    create?: Array<PurchaseCreateWithoutUserInput>;

    @Field(() => [PurchaseCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<PurchaseCreateOrConnectWithoutUserInput>;

    @Field(() => [PurchaseUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<PurchaseUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PurchaseCreateManyUserInputEnvelope, {nullable:true})
    createMany?: PurchaseCreateManyUserInputEnvelope;

    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    set?: Array<PurchaseWhereUniqueInput>;

    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    disconnect?: Array<PurchaseWhereUniqueInput>;

    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    delete?: Array<PurchaseWhereUniqueInput>;

    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    connect?: Array<PurchaseWhereUniqueInput>;

    @Field(() => [PurchaseUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<PurchaseUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PurchaseUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<PurchaseUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    deleteMany?: Array<PurchaseScalarWhereInput>;
}
