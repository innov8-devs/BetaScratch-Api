import { registerEnumType } from '@nestjs/graphql';

export enum StakedRaffleTicketsOrderByRelevanceFieldEnum {
    originalNumbers = "originalNumbers",
    sortedNumbers = "sortedNumbers",
    reference = "reference"
}


registerEnumType(StakedRaffleTicketsOrderByRelevanceFieldEnum, { name: 'StakedRaffleTicketsOrderByRelevanceFieldEnum', description: undefined })
