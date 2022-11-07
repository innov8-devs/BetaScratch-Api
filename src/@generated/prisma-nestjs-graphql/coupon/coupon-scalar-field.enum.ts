import { registerEnumType } from '@nestjs/graphql';

export enum CouponScalarFieldEnum {
    id = "id",
    percentage = "percentage",
    status = "status",
    cap = "cap",
    capAmount = "capAmount",
    code = "code",
    validity = "validity",
    expire = "expire",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CouponScalarFieldEnum, { name: 'CouponScalarFieldEnum', description: undefined })
