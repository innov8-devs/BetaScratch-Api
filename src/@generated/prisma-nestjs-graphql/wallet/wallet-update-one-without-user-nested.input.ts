import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutUserInput } from './wallet-create-without-user.input';
import { WalletCreateOrConnectWithoutUserInput } from './wallet-create-or-connect-without-user.input';
import { WalletUpsertWithoutUserInput } from './wallet-upsert-without-user.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutUserInput } from './wallet-update-without-user.input';

@InputType()
export class WalletUpdateOneWithoutUserNestedInput {

    @Field(() => WalletCreateWithoutUserInput, {nullable:true})
    create?: WalletCreateWithoutUserInput;

    @Field(() => WalletCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput;

    @Field(() => WalletUpsertWithoutUserInput, {nullable:true})
    upsert?: WalletUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutUserInput, {nullable:true})
    update?: WalletUpdateWithoutUserInput;
}
