import { registerEnumType } from '@nestjs/graphql';

export enum TRANSACTION_TYPE {
    WALLET = "WALLET",
    BONUS = "BONUS",
    FLUTTERWAVE = "FLUTTERWAVE"
}


registerEnumType(TRANSACTION_TYPE, { name: 'TRANSACTION_TYPE', description: undefined })
