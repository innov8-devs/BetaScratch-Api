import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralUpdatereferralsInput } from '../prisma/referral-updatereferrals.input';
import { UserUpdateOneRequiredWithoutReferralNestedInput } from '../user/user-update-one-required-without-referral-nested.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ReferralUpdateInput {

    @Field(() => ReferralUpdatereferralsInput, {nullable:true})
    referrals?: ReferralUpdatereferralsInput;

    @Field(() => UserUpdateOneRequiredWithoutReferralNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutReferralNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    invitesFunded?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalEarned?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
