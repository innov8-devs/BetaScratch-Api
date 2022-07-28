import { registerEnumType } from '@nestjs/graphql';

export enum FlutterwaveLogScalarFieldEnum {
    id = "id",
    tx_ref = "tx_ref",
    transactionId = "transactionId",
    amount = "amount",
    currency = "currency",
    ip = "ip",
    status = "status",
    paymentType = "paymentType",
    customerName = "customerName",
    customerEmail = "customerEmail",
    customerPhoneNumber = "customerPhoneNumber",
    narration = "narration",
    processorResponse = "processorResponse",
    card = "card",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FlutterwaveLogScalarFieldEnum, { name: 'FlutterwaveLogScalarFieldEnum', description: undefined })
