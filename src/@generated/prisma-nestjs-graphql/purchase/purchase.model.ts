import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Cart } from '../cart/cart.model';
import { User } from '../user/user.model';
import { PurchaseCount } from './purchase-count.output';

@ObjectType()
export class Purchase {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false,defaultValue:'inactive'})
    status!: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    reference!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    subtotal!: number;

    @Field(() => [Cart], {nullable:true})
    cards?: Array<Cart>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => PurchaseCount, {nullable:false})
    _count?: PurchaseCount;
}
