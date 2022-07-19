import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpOrderByRelevanceFieldEnum } from './otp-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OtpOrderByRelevanceInput {

    @Field(() => [OtpOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof OtpOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
