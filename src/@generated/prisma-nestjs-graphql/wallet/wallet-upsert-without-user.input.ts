import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutUserInput } from './wallet-update-without-user.input';
import { WalletCreateWithoutUserInput } from './wallet-create-without-user.input';

@InputType()
export class WalletUpsertWithoutUserInput {

    @Field(() => WalletUpdateWithoutUserInput, {nullable:false})
    update!: WalletUpdateWithoutUserInput;

    @Field(() => WalletCreateWithoutUserInput, {nullable:false})
    create!: WalletCreateWithoutUserInput;
}
