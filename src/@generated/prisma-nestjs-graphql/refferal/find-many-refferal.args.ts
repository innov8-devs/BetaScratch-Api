import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalWhereInput } from './refferal-where.input';
import { RefferalOrderByWithRelationInput } from './refferal-order-by-with-relation.input';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RefferalScalarFieldEnum } from './refferal-scalar-field.enum';

@ArgsType()
export class FindManyRefferalArgs {

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

    @Field(() => [RefferalScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RefferalScalarFieldEnum>;
}
