import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Referral {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [Int], {nullable:true})
    referrals!: Array<number>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    invitesFunded!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    totalEarned!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
