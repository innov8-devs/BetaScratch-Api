import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameCategorySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
