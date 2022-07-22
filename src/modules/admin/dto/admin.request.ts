import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Field, InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { DB_TYPES, WALLET_TYPE } from 'types/constants/enum';

registerEnumType(ROLE, { name: 'ROLE', description: undefined });
registerEnumType(DB_TYPES, { name: 'DB_TYPES', description: undefined });
registerEnumType(WALLET_TYPE, { name: 'WALLET_TYPE', description: undefined });

@InputType()
export class RegisterAdminInput {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

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
  orderBy?: string | any = 'asc';
}

@InputType()
export class GetWalletsFromAdminInput {
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
export class GetGamesFromAdminInput {
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
export class GetUserPurchasesFromAdminInput {
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
export class EditUserPurchasesFromAdminInput {
  @Field(() => Number, { nullable: true })
  purchaseId?: number;

  @Field(() => String, { nullable: true })
  reference?: string;

  @Field(() => String, { nullable: true })
  status?: string;
}

@InputType()
export class GetUsersCountInput {
  @Field(() => DB_TYPES)
  field: keyof typeof DB_TYPES;
}

@InputType()
export class UpdateUserWalletInput {
  @Field()
  userId: number;

  @Field()
  amount: number;

  @Field(() => WALLET_TYPE)
  type: keyof typeof WALLET_TYPE;
}

@InputType()
export class GetWithdrawlistFromAdminInput {
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
export class GetPendingVerificationsFromAdminInput {
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
export class ChangeVerificationRequestInput {
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => String)
  @IsString()
  status: string;
}

@InputType()
export class PaginationInput {
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
