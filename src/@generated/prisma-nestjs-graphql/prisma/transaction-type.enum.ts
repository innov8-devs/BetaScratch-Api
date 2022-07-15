import { registerEnumType } from '@nestjs/graphql';

export enum TRANSACTION_TYPE {
    ACCOUNT = "ACCOUNT",
    BONUS = "BONUS",
    FLUTTERWAVE = "FLUTTERWAVE"
}


registerEnumType(TRANSACTION_TYPE, { name: 'TRANSACTION_TYPE', description: undefined })
