import { registerEnumType } from '@nestjs/graphql';

export enum CouponScalarFieldEnum {
    id = "id",
    code = "code",
    validity = "validity",
    expire = "expire",
    type = "type",
    percentage = "percentage",
    amount = "amount",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CouponScalarFieldEnum, { name: 'CouponScalarFieldEnum', description: undefined })
