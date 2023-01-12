import { registerEnumType } from '@nestjs/graphql';

export enum StakedRaffleScalarFieldEnum {
    id = "id",
    type = "type",
    numbers = "numbers",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(StakedRaffleScalarFieldEnum, { name: 'StakedRaffleScalarFieldEnum', description: undefined })
