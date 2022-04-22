import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryCreateManyInput } from './game-category-create-many.input';

@ArgsType()
export class CreateManyGameCategoryArgs {

    @Field(() => [GameCategoryCreateManyInput], {nullable:false})
    data!: Array<GameCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
