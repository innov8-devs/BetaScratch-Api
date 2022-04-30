import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutUserInput } from './wallet-create-without-user.input';
import { WalletCreateOrConnectWithoutUserInput } from './wallet-create-or-connect-without-user.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => WalletCreateWithoutUserInput, {nullable:true})
    create?: WalletCreateWithoutUserInput;

    @Field(() => WalletCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
