import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BannerUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
