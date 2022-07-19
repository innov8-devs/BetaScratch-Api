import { registerEnumType } from '@nestjs/graphql';

export enum MessageOrderByRelevanceFieldEnum {
    title = "title",
    description = "description",
    link = "link",
    messageType = "messageType"
}


registerEnumType(MessageOrderByRelevanceFieldEnum, { name: 'MessageOrderByRelevanceFieldEnum', description: undefined })
