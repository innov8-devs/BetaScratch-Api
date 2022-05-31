import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Field, InputType } from '@nestjs/graphql';

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
