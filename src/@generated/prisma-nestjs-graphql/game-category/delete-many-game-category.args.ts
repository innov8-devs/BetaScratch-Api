import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryWhereInput } from './game-category-where.input';

@ArgsType()
export class DeleteManyGameCategoryArgs {

    @Field(() => GameCategoryWhereInput, {nullable:true})
    where?: GameCategoryWhereInput;
}
