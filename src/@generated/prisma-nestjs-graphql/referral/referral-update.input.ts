import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralUpdatereferralsInput } from '../prisma/referral-updatereferrals.input';
import { UserUpdateOneRequiredWithoutReferralInput } from '../user/user-update-one-required-without-referral.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ReferralUpdateInput {

    @Field(() => ReferralUpdatereferralsInput, {nullable:true})
    referrals?: ReferralUpdatereferralsInput;

    @Field(() => UserUpdateOneRequiredWithoutReferralInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutReferralInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}