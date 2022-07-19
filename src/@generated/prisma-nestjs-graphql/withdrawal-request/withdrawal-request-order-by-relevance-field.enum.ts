import { registerEnumType } from '@nestjs/graphql';

export enum WithdrawalRequestOrderByRelevanceFieldEnum {
    bank = "bank",
    accountNumber = "accountNumber",
    accountName = "accountName",
    amount = "amount",
    status = "status",
    paypal = "paypal",
    btcWalletAdderess = "btcWalletAdderess",
    licenseNumber = "licenseNumber",
    licenseType = "licenseType"
}


registerEnumType(WithdrawalRequestOrderByRelevanceFieldEnum, { name: 'WithdrawalRequestOrderByRelevanceFieldEnum', description: undefined })
