import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryWhereUniqueInput } from './game-category-where-unique.input';
import { GameCategoryCreateInput } from './game-category-create.input';
import { GameCategoryUpdateInput } from './game-category-update.input';

@ArgsType()
export class UpsertOneGameCategoryArgs {

    @Field(() => GameCategoryWhereUniqueInput, {nullable:false})
    where!: GameCategoryWhereUniqueInput;

    @Field(() => GameCategoryCreateInput, {nullable:false})
    create!: GameCategoryCreateInput;

    @Field(() => GameCategoryUpdateInput, {nullable:false})
    update!: GameCategoryUpdateInput;
}
