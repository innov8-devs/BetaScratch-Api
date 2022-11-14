import { registerEnumType } from '@nestjs/graphql';

export enum CouponScalarFieldEnum {
    id = "id",
    percentage = "percentage",
    status = "status",
    capped = "capped",
    cappedAmount = "cappedAmount",
    code = "code",
    expires = "expires",
    quantity = "quantity",
    quantityCount = "quantityCount",
    quantityUsed = "quantityUsed",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    purchaseId = "purchaseId"
}


registerEnumType(CouponScalarFieldEnum, { name: 'CouponScalarFieldEnum', description: undefined })
