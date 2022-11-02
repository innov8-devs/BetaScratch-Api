import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponCreateManyInput } from './coupon-create-many.input';

@ArgsType()
export class CreateManyCouponArgs {

    @Field(() => [CouponCreateManyInput], {nullable:false})
    data!: Array<CouponCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
