import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BannerMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
