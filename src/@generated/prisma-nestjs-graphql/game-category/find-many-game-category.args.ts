import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryWhereInput } from './game-category-where.input';
import { GameCategoryOrderByWithRelationInput } from './game-category-order-by-with-relation.input';
import { GameCategoryWhereUniqueInput } from './game-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameCategoryScalarFieldEnum } from './game-category-scalar-field.enum';

@ArgsType()
export class FindManyGameCategoryArgs {

    @Field(() => GameCategoryWhereInput, {nullable:true})
    where?: GameCategoryWhereInput;

    @Field(() => [GameCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GameCategoryOrderByWithRelationInput>;

    @Field(() => GameCategoryWhereUniqueInput, {nullable:true})
    cursor?: GameCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameCategoryScalarFieldEnum>;
}
