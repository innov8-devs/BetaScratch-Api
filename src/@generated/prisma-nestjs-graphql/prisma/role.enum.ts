import { registerEnumType } from '@nestjs/graphql';

export enum ROLE {
  USER = 'USER',
  ADMIN = 'ADMIN',
  IT_ADMIN = 'IT_ADMIN',
  ACCOUNT_ADMIN = 'ACCOUNT_ADMIN',
  CUSTOMER_SUPPORT_ADMIN = 'CUSTOMER_SUPPORT_ADMIN',
  BUSINESS_DEV_ADMIN = 'BUSINESS_DEV_ADMIN',
}

registerEnumType(ROLE, { name: 'ROLE', description: undefined });
