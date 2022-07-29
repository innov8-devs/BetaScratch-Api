import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BannerWhereInput {

    @Field(() => [BannerWhereInput], {nullable:true})
    AND?: Array<BannerWhereInput>;

    @Field(() => [BannerWhereInput], {nullable:true})
    OR?: Array<BannerWhereInput>;

    @Field(() => [BannerWhereInput], {nullable:true})
    NOT?: Array<BannerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
