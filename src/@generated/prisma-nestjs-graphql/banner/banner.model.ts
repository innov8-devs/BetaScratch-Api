import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Banner {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
