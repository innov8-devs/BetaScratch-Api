import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalCreatereferralsInput } from '../prisma/refferal-createreferrals.input';

@InputType()
export class RefferalCreateWithoutUserInput {

    @Field(() => RefferalCreatereferralsInput, {nullable:true})
    referrals?: RefferalCreatereferralsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
