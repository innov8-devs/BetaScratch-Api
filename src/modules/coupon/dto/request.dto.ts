import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@InputType()
export class CreateCouponInput {
  @Field(() => Int, { nullable: false })
  percentage!: number;

  @Field(() => Boolean, { nullable: false })
  @IsBoolean()
  status!: boolean;

  @Field(() => Boolean, { nullable: false })
  @IsBoolean()
  cap!: boolean;

  @Field(() => Int, { nullable: false })
  capAmount!: number;

  @Field(() => String, { nullable: false })
  @IsString()
  code!: string;

  @Field(() => Number, { nullable: false })
  @IsString()
  expireMinutes!: number;
}
