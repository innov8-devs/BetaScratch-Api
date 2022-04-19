import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class GameWhereInput {

    @Field(() => [GameWhereInput], {nullable:true})
    AND?: Array<GameWhereInput>;

    @Field(() => [GameWhereInput], {nullable:true})
    OR?: Array<GameWhereInput>;

    @Field(() => [GameWhereInput], {nullable:true})
    NOT?: Array<GameWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    gameId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    price?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    availability?: IntFilter;
}
