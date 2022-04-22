import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameCategoryCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    categoryName?: true;

    @Field(() => Boolean, {nullable:true})
    categoryLabel?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
