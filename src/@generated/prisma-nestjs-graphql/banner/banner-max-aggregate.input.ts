import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BannerMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    imageUrl?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
