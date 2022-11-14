import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponScalarWhereInput } from './coupon-scalar-where.input';
import { CouponUpdateManyMutationInput } from './coupon-update-many-mutation.input';

@InputType()
export class CouponUpdateManyWithWhereWithoutPurchaseInput {

    @Field(() => CouponScalarWhereInput, {nullable:false})
    where!: CouponScalarWhereInput;

    @Field(() => CouponUpdateManyMutationInput, {nullable:false})
    data!: CouponUpdateManyMutationInput;
}
