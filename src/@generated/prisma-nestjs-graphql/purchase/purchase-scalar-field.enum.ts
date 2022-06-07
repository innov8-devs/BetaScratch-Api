import { registerEnumType } from '@nestjs/graphql';

export enum PurchaseScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    status = "status",
    quantity = "quantity",
    reference = "reference",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PurchaseScalarFieldEnum, { name: 'PurchaseScalarFieldEnum', description: undefined })
