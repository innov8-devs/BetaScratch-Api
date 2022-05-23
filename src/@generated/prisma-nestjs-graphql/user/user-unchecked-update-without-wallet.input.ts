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
import { TransactionUncheckedUpdateManyWithoutUserInput } from '../transaction/transaction-unchecked-update-many-without-user.input';
import { OtpUncheckedUpdateManyWithoutUserInput } from '../otp/otp-unchecked-update-many-without-user.input';
import { WithdrawalRequestUncheckedUpdateManyWithoutUserInput } from '../withdrawal-request/withdrawal-request-unchecked-update-many-without-user.input';
import { CartUncheckedUpdateManyWithoutUserInput } from '../cart/cart-unchecked-update-many-without-user.input';
import { MessageUncheckedUpdateManyWithoutUserInput } from '../message/message-unchecked-update-many-without-user.input';
import { RefferalUncheckedUpdateManyWithoutUserInput } from '../refferal/refferal-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutWalletInput {

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    licenseFrontImage?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    licenseBackImage?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    verificationStatus?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    vipStatus?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    referralId?: StringFieldUpdateOperationsInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutUserInput, {nullable:true})
    transactions?: TransactionUncheckedUpdateManyWithoutUserInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OtpUncheckedUpdateManyWithoutUserInput, {nullable:true})
    Otp?: OtpUncheckedUpdateManyWithoutUserInput;

    @Field(() => WithdrawalRequestUncheckedUpdateManyWithoutUserInput, {nullable:true})
    WithdrawalRequest?: WithdrawalRequestUncheckedUpdateManyWithoutUserInput;

    @Field(() => CartUncheckedUpdateManyWithoutUserInput, {nullable:true})
    Cart?: CartUncheckedUpdateManyWithoutUserInput;

    @Field(() => MessageUncheckedUpdateManyWithoutUserInput, {nullable:true})
    Message?: MessageUncheckedUpdateManyWithoutUserInput;

    @Field(() => RefferalUncheckedUpdateManyWithoutUserInput, {nullable:true})
    Refferal?: RefferalUncheckedUpdateManyWithoutUserInput;
}
