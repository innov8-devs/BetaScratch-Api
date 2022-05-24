import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalUpdatereferralsInput } from '../prisma/refferal-updatereferrals.input';
import { UserUpdateOneRequiredWithoutRefferalInput } from '../user/user-update-one-required-without-refferal.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class RefferalUpdateInput {

    @Field(() => RefferalUpdatereferralsInput, {nullable:true})
    referrals?: RefferalUpdatereferralsInput;

    @Field(() => UserUpdateOneRequiredWithoutRefferalInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRefferalInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
