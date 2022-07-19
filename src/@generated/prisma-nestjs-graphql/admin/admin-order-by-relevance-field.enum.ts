import { registerEnumType } from '@nestjs/graphql';

export enum AdminOrderByRelevanceFieldEnum {
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    mobileNumber = "mobileNumber",
    username = "username",
    password = "password"
}


registerEnumType(AdminOrderByRelevanceFieldEnum, { name: 'AdminOrderByRelevanceFieldEnum', description: undefined })
