import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Admin } from '../admin/admin.model';

@ObjectType()
export class Token {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => Date, {nullable:false})
    expire!: Date;

    @Field(() => Boolean, {nullable:false})
    validity!: boolean;

    @Field(() => String, {nullable:false})
    mobileNumber!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Admin, {nullable:true})
    Admin?: Admin | null;

    @Field(() => Int, {nullable:true})
    adminId!: number | null;
}
