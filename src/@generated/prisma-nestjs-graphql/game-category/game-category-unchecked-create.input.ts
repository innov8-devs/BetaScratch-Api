import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class GameCategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    categoryName!: string;
}
