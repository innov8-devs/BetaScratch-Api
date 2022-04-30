import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class WalletWhereInput {

    @Field(() => [WalletWhereInput], {nullable:true})
    AND?: Array<WalletWhereInput>;

    @Field(() => [WalletWhereInput], {nullable:true})
    OR?: Array<WalletWhereInput>;

    @Field(() => [WalletWhereInput], {nullable:true})
    NOT?: Array<WalletWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    withdrawable?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    bonus?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
