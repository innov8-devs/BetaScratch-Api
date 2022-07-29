import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BannerCreateInput {

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
