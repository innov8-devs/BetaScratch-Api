import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerUpdateInput } from './banner-update.input';
import { BannerWhereUniqueInput } from './banner-where-unique.input';

@ArgsType()
export class UpdateOneBannerArgs {

    @Field(() => BannerUpdateInput, {nullable:false})
    data!: BannerUpdateInput;

    @Field(() => BannerWhereUniqueInput, {nullable:false})
    where!: BannerWhereUniqueInput;
}
