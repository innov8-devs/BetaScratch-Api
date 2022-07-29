import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereUniqueInput } from './banner-where-unique.input';

@ArgsType()
export class FindUniqueBannerArgs {

    @Field(() => BannerWhereUniqueInput, {nullable:false})
    where!: BannerWhereUniqueInput;
}
