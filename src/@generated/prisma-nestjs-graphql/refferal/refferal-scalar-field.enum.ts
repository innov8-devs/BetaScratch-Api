import { registerEnumType } from '@nestjs/graphql';

export enum RefferalScalarFieldEnum {
    id = "id",
    referrals = "referrals",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RefferalScalarFieldEnum, { name: 'RefferalScalarFieldEnum', description: undefined })
