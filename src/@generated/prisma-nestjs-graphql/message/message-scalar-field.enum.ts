import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    userId = "userId",
    title = "title",
    description = "description",
    link = "link",
    readStatus = "readStatus",
    messageType = "messageType",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
