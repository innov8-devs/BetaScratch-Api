import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryCreateInput } from './game-category-create.input';

@ArgsType()
export class CreateOneGameCategoryArgs {

    @Field(() => GameCategoryCreateInput, {nullable:false})
    data!: GameCategoryCreateInput;
}
