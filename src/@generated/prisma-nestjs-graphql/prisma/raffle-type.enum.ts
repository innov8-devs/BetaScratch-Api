import { registerEnumType } from '@nestjs/graphql';

export enum RAFFLE_TYPE {
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY"
}


registerEnumType(RAFFLE_TYPE, { name: 'RAFFLE_TYPE', description: undefined })
