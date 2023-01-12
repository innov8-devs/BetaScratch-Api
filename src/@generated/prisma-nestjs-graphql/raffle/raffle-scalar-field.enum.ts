import { registerEnumType } from '@nestjs/graphql';

export enum RaffleScalarFieldEnum {
    id = "id",
    type = "type",
    win = "win",
    stake = "stake",
    expiry = "expiry",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RaffleScalarFieldEnum, { name: 'RaffleScalarFieldEnum', description: undefined })
