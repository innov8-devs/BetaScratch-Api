import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DashboardTabsResponse {
  @Field()
  title: string;

  @Field(() => String || Number)
  value: string | number;
}

@ObjectType()
export class DashboardData {
  @Field(() => [DashboardTabsResponse], { nullable: true })
  tabs: DashboardTabsResponse[];
}

@ObjectType()
export class DashboardDataResponse {
  @Field(() => DashboardData, { nullable: true })
  data: DashboardData;
}
