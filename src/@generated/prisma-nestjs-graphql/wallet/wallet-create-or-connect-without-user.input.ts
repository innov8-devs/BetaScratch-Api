import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutUserInput } from './wallet-create-without-user.input';

@InputType()
export class WalletCreateOrConnectWithoutUserInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutUserInput, {nullable:false})
    create!: WalletCreateWithoutUserInput;
}
