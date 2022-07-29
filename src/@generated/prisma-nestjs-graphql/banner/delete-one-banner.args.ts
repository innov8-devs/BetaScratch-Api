import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereUniqueInput } from './banner-where-unique.input';

@ArgsType()
export class DeleteOneBannerArgs {

    @Field(() => BannerWhereUniqueInput, {nullable:false})
    where!: BannerWhereUniqueInput;
}
