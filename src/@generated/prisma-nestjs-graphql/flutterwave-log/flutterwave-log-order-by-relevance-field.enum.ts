import { registerEnumType } from '@nestjs/graphql';

export enum FlutterwaveLogOrderByRelevanceFieldEnum {
    tx_ref = "tx_ref",
    currency = "currency",
    ip = "ip",
    status = "status",
    paymentType = "paymentType",
    customerName = "customerName",
    customerEmail = "customerEmail",
    customerPhoneNumber = "customerPhoneNumber",
    narration = "narration",
    processorResponse = "processorResponse"
}


registerEnumType(FlutterwaveLogOrderByRelevanceFieldEnum, { name: 'FlutterwaveLogOrderByRelevanceFieldEnum', description: undefined })
