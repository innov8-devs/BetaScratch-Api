import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Admin } from '../admin/admin.model';

@ObjectType()
export class Otp {

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

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Admin, {nullable:true})
    admin?: Admin | null;

    @Field(() => Int, {nullable:true})
    adminId!: number | null;
}
