import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CouponCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    percentage?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    cap?: true;

    @Field(() => Boolean, {nullable:true})
    capAmount?: true;

    @Field(() => Boolean, {nullable:true})
    code?: true;

    @Field(() => Boolean, {nullable:true})
    validity?: true;

    @Field(() => Boolean, {nullable:true})
    expire?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
