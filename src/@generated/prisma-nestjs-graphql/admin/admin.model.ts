import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ROLE } from '../prisma/role.enum';
import { Otp } from '../otp/otp.model';
import { Message } from '../message/message.model';
import { Token } from '../token/token.model';
import { AdminCount } from './admin-count.output';

@ObjectType()
export class Admin {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => ROLE, {nullable:false})
    role!: keyof typeof ROLE;

    @Field(() => String, {nullable:false})
    mobileNumber!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    confirmed!: boolean;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [Otp], {nullable:true})
    Otp?: Array<Otp>;

    @Field(() => [Message], {nullable:true})
    Message?: Array<Message>;

    @Field(() => [Token], {nullable:true})
    Token?: Array<Token>;

    @Field(() => AdminCount, {nullable:false})
    _count?: AdminCount;
}
