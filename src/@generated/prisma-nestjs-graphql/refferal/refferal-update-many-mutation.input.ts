import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalUpdatereferralsInput } from '../prisma/refferal-updatereferrals.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class RefferalUpdateManyMutationInput {

    @Field(() => RefferalUpdatereferralsInput, {nullable:true})
    referrals?: RefferalUpdatereferralsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
