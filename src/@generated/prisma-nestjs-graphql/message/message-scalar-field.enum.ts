import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    userId = "userId",
    title = "title",
    description = "description",
    link = "link",
    readStatus = "readStatus",
    messageType = "messageType",
    cards = "cards",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    adminId = "adminId"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
