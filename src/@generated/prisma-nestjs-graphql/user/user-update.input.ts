import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumROLEFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { EnumGENDERFieldUpdateOperationsInput } from '../prisma/enum-gender-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { WalletUpdateOneWithoutUserInput } from '../wallet/wallet-update-one-without-user.input';
import { TransactionUpdateManyWithoutUserInput } from '../transaction/transaction-update-many-without-user.input';
import { TokenUpdateManyWithoutUserInput } from '../token/token-update-many-without-user.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumROLEFieldUpdateOperationsInput, {nullable:true})
    role?: EnumROLEFieldUpdateOperationsInput;

    @Field(() => EnumGENDERFieldUpdateOperationsInput, {nullable:true})
    gender?: EnumGENDERFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    mobileNumber?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    state?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    confirmed?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneWithoutUserInput, {nullable:true})
    wallet?: WalletUpdateOneWithoutUserInput;

    @Field(() => TransactionUpdateManyWithoutUserInput, {nullable:true})
    transactions?: TransactionUpdateManyWithoutUserInput;

    @Field(() => TokenUpdateManyWithoutUserInput, {nullable:true})
    tokens?: TokenUpdateManyWithoutUserInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
