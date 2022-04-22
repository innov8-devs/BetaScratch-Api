import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryWhereUniqueInput } from './game-category-where-unique.input';

@ArgsType()
export class FindUniqueGameCategoryArgs {

    @Field(() => GameCategoryWhereUniqueInput, {nullable:false})
    where!: GameCategoryWhereUniqueInput;
}
