import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CartListRelationFilter } from '../cart/cart-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PurchaseWhereInput {

    @Field(() => [PurchaseWhereInput], {nullable:true})
    AND?: Array<PurchaseWhereInput>;

    @Field(() => [PurchaseWhereInput], {nullable:true})
    OR?: Array<PurchaseWhereInput>;

    @Field(() => [PurchaseWhereInput], {nullable:true})
    NOT?: Array<PurchaseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    reference?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    subtotal?: IntFilter;

    @Field(() => CartListRelationFilter, {nullable:true})
    cards?: CartListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
