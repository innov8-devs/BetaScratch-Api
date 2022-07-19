import { registerEnumType } from '@nestjs/graphql';

export enum WalletOrderByRelevanceFieldEnum {
    currency = "currency"
}


registerEnumType(WalletOrderByRelevanceFieldEnum, { name: 'WalletOrderByRelevanceFieldEnum', description: undefined })
