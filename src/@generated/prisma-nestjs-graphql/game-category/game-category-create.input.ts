import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class GameCategoryCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    categoryName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    categoryLabel!: string;
}
