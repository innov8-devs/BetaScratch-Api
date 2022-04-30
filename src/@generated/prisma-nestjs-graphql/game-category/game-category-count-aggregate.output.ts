import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameCategoryCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    categoryName!: number;

    @Field(() => Int, {nullable:false})
    categoryLabel!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
