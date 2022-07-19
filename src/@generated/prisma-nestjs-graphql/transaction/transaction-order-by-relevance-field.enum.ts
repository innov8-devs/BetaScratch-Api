import { registerEnumType } from '@nestjs/graphql';

export enum TransactionOrderByRelevanceFieldEnum {
    currency = "currency",
    transactionRef = "transactionRef",
    status = "status",
    purpose = "purpose",
    type = "type"
}


registerEnumType(TransactionOrderByRelevanceFieldEnum, { name: 'TransactionOrderByRelevanceFieldEnum', description: undefined })
