import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumROLEFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { EnumGENDERFieldUpdateOperationsInput } from '../prisma/enum-gender-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { WalletUncheckedUpdateOneWithoutUserNestedInput } from '../wallet/wallet-unchecked-update-one-without-user-nested.input';
import { TransactionUncheckedUpdateManyWithoutUserNestedInput } from '../transaction/transaction-unchecked-update-many-without-user-nested.input';
import { OtpUncheckedUpdateManyWithoutUserNestedInput } from '../otp/otp-unchecked-update-many-without-user-nested.input';
import { WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput } from '../withdrawal-request/withdrawal-request-unchecked-update-many-without-user-nested.input';
import { CartUncheckedUpdateManyWithoutUserNestedInput } from '../cart/cart-unchecked-update-many-without-user-nested.input';
import { MessageUncheckedUpdateManyWithoutUserNestedInput } from '../message/message-unchecked-update-many-without-user-nested.input';
import { TokenUncheckedUpdateManyWithoutUserNestedInput } from '../token/token-unchecked-update-many-without-user-nested.input';
import { PurchaseUncheckedUpdateManyWithoutUserNestedInput } from '../purchase/purchase-unchecked-update-many-without-user-nested.input';
import { ResetPasswordMetricsUncheckedUpdateManyWithoutUserNestedInput } from '../reset-password-metrics/reset-password-metrics-unchecked-update-many-without-user-nested.input';
import { StakedRaffleUncheckedUpdateManyWithoutUserNestedInput } from '../staked-raffle/staked-raffle-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutReferralInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    disabled?: BoolFieldUpdateOperationsInput;

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

    @Field(() => WalletUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OtpUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    otp?: OtpUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    withdrawalRequest?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CartUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    purchases?: CartUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MessageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    message?: MessageUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => TokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    token?: TokenUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PurchaseUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ResetPasswordMetricsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    ResetPasswordMetrics?: ResetPasswordMetricsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => StakedRaffleUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    stakedRaffle?: StakedRaffleUncheckedUpdateManyWithoutUserNestedInput;
}
