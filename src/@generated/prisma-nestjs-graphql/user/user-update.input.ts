import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumROLEFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { EnumGENDERFieldUpdateOperationsInput } from '../prisma/enum-gender-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { WalletUpdateOneWithoutUserNestedInput } from '../wallet/wallet-update-one-without-user-nested.input';
import { TransactionUpdateManyWithoutUserNestedInput } from '../transaction/transaction-update-many-without-user-nested.input';
import { OtpUpdateManyWithoutUserNestedInput } from '../otp/otp-update-many-without-user-nested.input';
import { WithdrawalRequestUpdateManyWithoutUserNestedInput } from '../withdrawal-request/withdrawal-request-update-many-without-user-nested.input';
import { CartUpdateManyWithoutUserNestedInput } from '../cart/cart-update-many-without-user-nested.input';
import { MessageUpdateManyWithoutUserNestedInput } from '../message/message-update-many-without-user-nested.input';
import { ReferralUpdateManyWithoutUserNestedInput } from '../referral/referral-update-many-without-user-nested.input';
import { TokenUpdateManyWithoutUserNestedInput } from '../token/token-update-many-without-user-nested.input';
import { PurchaseUpdateManyWithoutUserNestedInput } from '../purchase/purchase-update-many-without-user-nested.input';
import { ResetPasswordMetricsUpdateManyWithoutUserNestedInput } from '../reset-password-metrics/reset-password-metrics-update-many-without-user-nested.input';

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

    @Field(() => WalletUpdateOneWithoutUserNestedInput, {nullable:true})
    wallet?: WalletUpdateOneWithoutUserNestedInput;

    @Field(() => TransactionUpdateManyWithoutUserNestedInput, {nullable:true})
    transactions?: TransactionUpdateManyWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OtpUpdateManyWithoutUserNestedInput, {nullable:true})
    otp?: OtpUpdateManyWithoutUserNestedInput;

    @Field(() => WithdrawalRequestUpdateManyWithoutUserNestedInput, {nullable:true})
    withdrawalRequest?: WithdrawalRequestUpdateManyWithoutUserNestedInput;

    @Field(() => CartUpdateManyWithoutUserNestedInput, {nullable:true})
    purchases?: CartUpdateManyWithoutUserNestedInput;

    @Field(() => MessageUpdateManyWithoutUserNestedInput, {nullable:true})
    message?: MessageUpdateManyWithoutUserNestedInput;

    @Field(() => ReferralUpdateManyWithoutUserNestedInput, {nullable:true})
    referral?: ReferralUpdateManyWithoutUserNestedInput;

    @Field(() => TokenUpdateManyWithoutUserNestedInput, {nullable:true})
    token?: TokenUpdateManyWithoutUserNestedInput;

    @Field(() => PurchaseUpdateManyWithoutUserNestedInput, {nullable:true})
    purchase?: PurchaseUpdateManyWithoutUserNestedInput;

    @Field(() => ResetPasswordMetricsUpdateManyWithoutUserNestedInput, {nullable:true})
    ResetPasswordMetrics?: ResetPasswordMetricsUpdateManyWithoutUserNestedInput;
}
