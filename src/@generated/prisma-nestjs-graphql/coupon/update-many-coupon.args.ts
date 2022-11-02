import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUpdateManyMutationInput } from './coupon-update-many-mutation.input';
import { CouponWhereInput } from './coupon-where.input';

@ArgsType()
export class UpdateManyCouponArgs {

    @Field(() => CouponUpdateManyMutationInput, {nullable:false})
    data!: CouponUpdateManyMutationInput;

    @Field(() => CouponWhereInput, {nullable:true})
    where?: CouponWhereInput;
}
