import { registerEnumType } from '@nestjs/graphql';

export enum WithdrawalRequestScalarFieldEnum {
    id = "id",
    userId = "userId",
    bank = "bank",
    accountNumber = "accountNumber",
    accountName = "accountName",
    amount = "amount",
    status = "status",
    paypal = "paypal",
    btcWalletAdderess = "btcWalletAdderess",
    licenseNumber = "licenseNumber",
    licenseType = "licenseType",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(WithdrawalRequestScalarFieldEnum, { name: 'WithdrawalRequestScalarFieldEnum', description: undefined })
