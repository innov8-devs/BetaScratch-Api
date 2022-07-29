import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerUpdateManyMutationInput } from './banner-update-many-mutation.input';
import { BannerWhereInput } from './banner-where.input';

@ArgsType()
export class UpdateManyBannerArgs {

    @Field(() => BannerUpdateManyMutationInput, {nullable:false})
    data!: BannerUpdateManyMutationInput;

    @Field(() => BannerWhereInput, {nullable:true})
    where?: BannerWhereInput;
}
