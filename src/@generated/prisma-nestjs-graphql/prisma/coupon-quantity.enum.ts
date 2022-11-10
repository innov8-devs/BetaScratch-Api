import { registerEnumType } from '@nestjs/graphql';

export enum COUPON_QUANTITY {
    UNLIMITED = "UNLIMITED",
    LIMITED = "LIMITED"
}


registerEnumType(COUPON_QUANTITY, { name: 'COUPON_QUANTITY', description: undefined })
