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
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CouponScalarFieldEnum, { name: 'CouponScalarFieldEnum', description: undefined })
