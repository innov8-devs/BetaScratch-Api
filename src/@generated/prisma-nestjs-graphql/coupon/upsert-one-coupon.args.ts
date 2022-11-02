import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';
import { CouponCreateInput } from './coupon-create.input';
import { CouponUpdateInput } from './coupon-update.input';

@ArgsType()
export class UpsertOneCouponArgs {

    @Field(() => CouponWhereUniqueInput, {nullable:false})
    where!: CouponWhereUniqueInput;

    @Field(() => CouponCreateInput, {nullable:false})
    create!: CouponCreateInput;

    @Field(() => CouponUpdateInput, {nullable:false})
    update!: CouponUpdateInput;
}
