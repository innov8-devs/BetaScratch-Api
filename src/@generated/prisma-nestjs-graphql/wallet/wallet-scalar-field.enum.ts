import { registerEnumType } from '@nestjs/graphql';

export enum WalletScalarFieldEnum {
    id = "id",
    userId = "userId",
    withdrawable = "withdrawable",
    bonus = "bonus",
    currency = "currency",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(WalletScalarFieldEnum, { name: 'WalletScalarFieldEnum', description: undefined })
