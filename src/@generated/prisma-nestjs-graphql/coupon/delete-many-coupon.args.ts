import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponWhereInput } from './coupon-where.input';

@ArgsType()
export class DeleteManyCouponArgs {

    @Field(() => CouponWhereInput, {nullable:true})
    where?: CouponWhereInput;
}
