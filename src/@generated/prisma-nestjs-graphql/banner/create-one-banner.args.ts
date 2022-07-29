import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerCreateInput } from './banner-create.input';

@ArgsType()
export class CreateOneBannerArgs {

    @Field(() => BannerCreateInput, {nullable:false})
    data!: BannerCreateInput;
}
