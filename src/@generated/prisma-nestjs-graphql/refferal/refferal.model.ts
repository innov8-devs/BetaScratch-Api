import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Refferal {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [String], {nullable:true})
    referrals!: Array<string>;

    @Field(() => User, {nullable:false})
    User?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
