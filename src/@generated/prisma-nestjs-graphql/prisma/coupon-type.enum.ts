import { registerEnumType } from '@nestjs/graphql';

export enum COUPON_TYPE {
    PERCENTAGE = "PERCENTAGE",
    AMOUNT = "AMOUNT"
}


registerEnumType(COUPON_TYPE, { name: 'COUPON_TYPE', description: undefined })
