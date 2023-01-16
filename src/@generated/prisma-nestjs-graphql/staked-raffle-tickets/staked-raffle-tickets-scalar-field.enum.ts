import { registerEnumType } from '@nestjs/graphql';

export enum StakedRaffleTicketsScalarFieldEnum {
    id = "id",
    type = "type",
    originalNumbers = "originalNumbers",
    sortedNumbers = "sortedNumbers",
    reference = "reference",
    transactionType = "transactionType",
    userId = "userId",
    isPaid = "isPaid",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(StakedRaffleTicketsScalarFieldEnum, { name: 'StakedRaffleTicketsScalarFieldEnum', description: undefined })
