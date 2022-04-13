import { GENDER } from '@generated/prisma-nestjs-graphql/prisma/gender.enum';
import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class LoginInput {
  @Field()
  password: string;

  @Field()
  username: string;
}

@InputType()
export class AdminLoginInput {
  @Field()
  email: string;
  @Field()
  password: string;
}

@InputType()
export class ValidateFormOneInput {
  @Field(() => String, { nullable: false })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @Field(() => String, { nullable: false })
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  firstName!: string;

  @Field(() => String, { nullable: false })
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  lastName!: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsPhoneNumber()
  mobileNumber!: string;
}

@InputType()
export class ValidateFormTwoInput {
  @Field(() => String, { nullable: false })
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  username!: string;

  @Field(() => Date, { nullable: false })
  @IsNotEmpty()
  dateOfBirth!: Date | string;

  @Field(() => GENDER, { nullable: false })
  @IsNotEmpty()
  gender!: keyof typeof GENDER;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  state!: string;

  @Field(() => String, { nullable: false })
  password!: string;
}

@InputType()
export class ChangePasswordInput {
  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  token!: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  newPassword!: string;
}

@InputType()
export class UserPaginationInput {
  @Field(() => Number, { nullable: true })
  @IsNumber()
  skip?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  take?: number;
}
