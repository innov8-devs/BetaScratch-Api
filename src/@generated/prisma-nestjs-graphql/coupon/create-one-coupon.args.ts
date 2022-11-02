import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponCreateInput } from './coupon-create.input';

@ArgsType()
export class CreateOneCouponArgs {

    @Field(() => CouponCreateInput, {nullable:false})
    data!: CouponCreateInput;
}
