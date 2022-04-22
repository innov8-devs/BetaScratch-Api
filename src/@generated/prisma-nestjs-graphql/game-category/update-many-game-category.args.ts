import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryUpdateManyMutationInput } from './game-category-update-many-mutation.input';
import { GameCategoryWhereInput } from './game-category-where.input';

@ArgsType()
export class UpdateManyGameCategoryArgs {

    @Field(() => GameCategoryUpdateManyMutationInput, {nullable:false})
    data!: GameCategoryUpdateManyMutationInput;

    @Field(() => GameCategoryWhereInput, {nullable:true})
    where?: GameCategoryWhereInput;
}
