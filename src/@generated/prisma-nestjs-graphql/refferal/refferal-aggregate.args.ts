import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalWhereInput } from './refferal-where.input';
import { RefferalOrderByWithRelationInput } from './refferal-order-by-with-relation.input';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RefferalCountAggregateInput } from './refferal-count-aggregate.input';
import { RefferalAvgAggregateInput } from './refferal-avg-aggregate.input';
import { RefferalSumAggregateInput } from './refferal-sum-aggregate.input';
import { RefferalMinAggregateInput } from './refferal-min-aggregate.input';
import { RefferalMaxAggregateInput } from './refferal-max-aggregate.input';

@ArgsType()
export class RefferalAggregateArgs {

    @Field(() => RefferalWhereInput, {nullable:true})
    where?: RefferalWhereInput;

    @Field(() => [RefferalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefferalOrderByWithRelationInput>;

    @Field(() => RefferalWhereUniqueInput, {nullable:true})
    cursor?: RefferalWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RefferalCountAggregateInput, {nullable:true})
    _count?: RefferalCountAggregateInput;

    @Field(() => RefferalAvgAggregateInput, {nullable:true})
    _avg?: RefferalAvgAggregateInput;

    @Field(() => RefferalSumAggregateInput, {nullable:true})
    _sum?: RefferalSumAggregateInput;

    @Field(() => RefferalMinAggregateInput, {nullable:true})
    _min?: RefferalMinAggregateInput;

    @Field(() => RefferalMaxAggregateInput, {nullable:true})
    _max?: RefferalMaxAggregateInput;
}
