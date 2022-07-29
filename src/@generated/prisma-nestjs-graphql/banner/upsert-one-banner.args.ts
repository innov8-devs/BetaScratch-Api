import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereUniqueInput } from './banner-where-unique.input';
import { BannerCreateInput } from './banner-create.input';
import { BannerUpdateInput } from './banner-update.input';

@ArgsType()
export class UpsertOneBannerArgs {

    @Field(() => BannerWhereUniqueInput, {nullable:false})
    where!: BannerWhereUniqueInput;

    @Field(() => BannerCreateInput, {nullable:false})
    create!: BannerCreateInput;

    @Field(() => BannerUpdateInput, {nullable:false})
    update!: BannerUpdateInput;
}
