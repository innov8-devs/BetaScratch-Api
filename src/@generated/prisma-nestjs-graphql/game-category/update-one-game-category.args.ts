import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryUpdateInput } from './game-category-update.input';
import { GameCategoryWhereUniqueInput } from './game-category-where-unique.input';

@ArgsType()
export class UpdateOneGameCategoryArgs {

    @Field(() => GameCategoryUpdateInput, {nullable:false})
    data!: GameCategoryUpdateInput;

    @Field(() => GameCategoryWhereUniqueInput, {nullable:false})
    where!: GameCategoryWhereUniqueInput;
}
