import { registerEnumType } from '@nestjs/graphql';

export enum CURRENCY {
    USD = "USD",
    NGN = "NGN"
}


registerEnumType(CURRENCY, { name: 'CURRENCY', description: undefined })
