import { Purchase } from '@generated/prisma-nestjs-graphql/purchase/purchase.model';
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

  @Field(() => [Purchase], { nullable: true })
  purchaseToday: Purchase[];
}

@ObjectType()
export class DashboardDataResponse {
  @Field(() => DashboardData, { nullable: true })
  data: DashboardData;
}
