import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Field, InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

registerEnumType(ROLE, { name: 'ROLE', description: undefined });

@InputType()
export class RegisterAdminInput {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  mobileNumber: string;

  @Field(() => ROLE, { nullable: false })
  role!: keyof typeof ROLE;
}

@InputType()
export class GetUsersFromAdminInput {
  @Field(() => Number)
  @IsNumber()
  page: number;

  @Field(() => Number)
  @IsNumber()
  size: number;

  @Field(() => String, { nullable: true })
  orderColumn?: string = 'id';

  @Field(() => String, { nullable: true })
  orderBy?: string = 'asc';
}

@InputType()
export class GetWalletsFromAdminInput {
  @Field(() => Number)
  @IsNumber()
  page: number;

  @Field(() => Number)
  @IsNumber()
  size: number;
}
