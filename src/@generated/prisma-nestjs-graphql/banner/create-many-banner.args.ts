import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerCreateManyInput } from './banner-create-many.input';

@ArgsType()
export class CreateManyBannerArgs {

    @Field(() => [BannerCreateManyInput], {nullable:false})
    data!: Array<BannerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
