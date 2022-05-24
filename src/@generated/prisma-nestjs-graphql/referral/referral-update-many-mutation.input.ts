import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralUpdatereferralsInput } from '../prisma/referral-updatereferrals.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ReferralUpdateManyMutationInput {

    @Field(() => ReferralUpdatereferralsInput, {nullable:true})
    referrals?: ReferralUpdatereferralsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
