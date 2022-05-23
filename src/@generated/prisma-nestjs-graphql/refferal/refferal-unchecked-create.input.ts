import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RefferalCreatereferralsInput } from '../prisma/refferal-createreferrals.input';

@InputType()
export class RefferalUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => RefferalCreatereferralsInput, {nullable:true})
    referrals?: RefferalCreatereferralsInput;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
