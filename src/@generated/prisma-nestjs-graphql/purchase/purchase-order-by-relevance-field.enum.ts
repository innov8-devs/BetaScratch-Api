import { registerEnumType } from '@nestjs/graphql';

export enum PurchaseOrderByRelevanceFieldEnum {
    username = "username",
    email = "email",
    status = "status",
    reference = "reference",
    flutterwaveType = "flutterwaveType"
}


registerEnumType(PurchaseOrderByRelevanceFieldEnum, { name: 'PurchaseOrderByRelevanceFieldEnum', description: undefined })
