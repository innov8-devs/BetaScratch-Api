import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralUpdatereferralsInput } from '../prisma/referral-updatereferrals.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ReferralUpdateManyMutationInput {

    @Field(() => ReferralUpdatereferralsInput, {nullable:true})
    referrals?: ReferralUpdatereferralsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    invitesFunded?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalEarned?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
