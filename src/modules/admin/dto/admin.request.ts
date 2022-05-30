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

  @Field(() => ROLE)
  role: ROLE =
    ROLE.ADMIN ||
    ROLE.ACCOUNT_ADMIN ||
    ROLE.BUSINESS_DEV_ADMIN ||
    ROLE.CUSTOMER_SUPPORT_ADMIN ||
    ROLE.IT_ADMIN;
}
