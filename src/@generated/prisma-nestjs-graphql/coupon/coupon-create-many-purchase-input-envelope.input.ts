import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponCreateManyPurchaseInput } from './coupon-create-many-purchase.input';

@InputType()
export class CouponCreateManyPurchaseInputEnvelope {

    @Field(() => [CouponCreateManyPurchaseInput], {nullable:false})
    data!: Array<CouponCreateManyPurchaseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
