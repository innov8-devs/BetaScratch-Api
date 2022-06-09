import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class GameCategoryWhereInput {

    @Field(() => [GameCategoryWhereInput], {nullable:true})
    AND?: Array<GameCategoryWhereInput>;

    @Field(() => [GameCategoryWhereInput], {nullable:true})
    OR?: Array<GameCategoryWhereInput>;

    @Field(() => [GameCategoryWhereInput], {nullable:true})
    NOT?: Array<GameCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryName?: StringFilter;
}
