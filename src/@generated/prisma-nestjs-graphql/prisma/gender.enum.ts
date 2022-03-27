import { registerEnumType } from '@nestjs/graphql';

export enum GENDER {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}


registerEnumType(GENDER, { name: 'GENDER', description: undefined })
