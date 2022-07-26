import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogWhereInput } from './flutterwave-log-where.input';
import { FlutterwaveLogOrderByWithRelationAndSearchRelevanceInput } from './flutterwave-log-order-by-with-relation-and-search-relevance.input';
import { FlutterwaveLogWhereUniqueInput } from './flutterwave-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FlutterwaveLogScalarFieldEnum } from './flutterwave-log-scalar-field.enum';

@ArgsType()
export class FindManyFlutterwaveLogArgs {

    @Field(() => FlutterwaveLogWhereInput, {nullable:true})
    where?: FlutterwaveLogWhereInput;

    @Field(() => [FlutterwaveLogOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<FlutterwaveLogOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => FlutterwaveLogWhereUniqueInput, {nullable:true})
    cursor?: FlutterwaveLogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FlutterwaveLogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FlutterwaveLogScalarFieldEnum>;
}
