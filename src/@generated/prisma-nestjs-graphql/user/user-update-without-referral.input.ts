import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumROLEFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { EnumGENDERFieldUpdateOperationsInput } from '../prisma/enum-gender-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { WalletUpdateOneWithoutUserInput } from '../wallet/wallet-update-one-without-user.input';
import { TransactionUpdateManyWithoutUserInput } from '../transaction/transaction-update-many-without-user.input';
import { OtpUpdateManyWithoutUserInput } from '../otp/otp-update-many-without-user.input';
import { WithdrawalRequestUpdateManyWithoutUserInput } from '../withdrawal-request/withdrawal-request-update-many-without-user.input';
import { CartUpdateManyWithoutUserInput } from '../cart/cart-update-many-without-user.input';
import { MessageUpdateManyWithoutUserInput } from '../message/message-update-many-without-user.input';
import { TokenUpdateManyWithoutUserInput } from '../token/token-update-many-without-user.input';
import { PurchaseUpdateManyWithoutUserInput } from '../purchase/purchase-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutReferralInput {

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    country?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    confirmed?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    licenseFrontImage?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    licenseBackImage?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    licenseNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    verificationType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    verificationStatus?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    vipStatus?: FloatFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneWithoutUserInput, {nullable:true})
    wallet?: WalletUpdateOneWithoutUserInput;

    @Field(() => TransactionUpdateManyWithoutUserInput, {nullable:true})
    transactions?: TransactionUpdateManyWithoutUserInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OtpUpdateManyWithoutUserInput, {nullable:true})
    otp?: OtpUpdateManyWithoutUserInput;

    @Field(() => WithdrawalRequestUpdateManyWithoutUserInput, {nullable:true})
    withdrawalRequest?: WithdrawalRequestUpdateManyWithoutUserInput;

    @Field(() => CartUpdateManyWithoutUserInput, {nullable:true})
    purchases?: CartUpdateManyWithoutUserInput;

    @Field(() => MessageUpdateManyWithoutUserInput, {nullable:true})
    message?: MessageUpdateManyWithoutUserInput;

    @Field(() => TokenUpdateManyWithoutUserInput, {nullable:true})
    token?: TokenUpdateManyWithoutUserInput;

    @Field(() => PurchaseUpdateManyWithoutUserInput, {nullable:true})
    purchase?: PurchaseUpdateManyWithoutUserInput;
}
