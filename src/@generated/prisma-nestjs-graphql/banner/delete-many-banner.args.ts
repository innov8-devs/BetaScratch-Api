import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';

@ArgsType()
export class DeleteManyBannerArgs {

    @Field(() => BannerWhereInput, {nullable:true})
    where?: BannerWhereInput;
}
