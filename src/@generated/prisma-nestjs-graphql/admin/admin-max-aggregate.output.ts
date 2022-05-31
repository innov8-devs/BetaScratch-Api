import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ROLE } from '../prisma/role.enum';

@ObjectType()
export class AdminMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => ROLE, {nullable:true})
    role?: keyof typeof ROLE;

    @Field(() => String, {nullable:true})
    mobileNumber?: string;

    @Field(() => Boolean, {nullable:true})
    confirmed?: boolean;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
