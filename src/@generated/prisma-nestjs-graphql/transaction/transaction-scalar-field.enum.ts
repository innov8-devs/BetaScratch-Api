import { registerEnumType } from '@nestjs/graphql';

export enum TransactionScalarFieldEnum {
    id = "id",
    amount = "amount",
    transactionId = "transactionId",
    currency = "currency",
    transactionRef = "transactionRef",
    status = "status",
    purpose = "purpose",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(TransactionScalarFieldEnum, { name: 'TransactionScalarFieldEnum', description: undefined })
