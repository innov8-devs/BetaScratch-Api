import { Raffle } from '@generated/prisma-nestjs-graphql/raffle/raffle.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { ROLE } from 'types/constants/enum';
import { UpdateRaffleInput } from './dto/request.dto';
import { RaffleService } from './raffle.service';

@Resolver()
export class RaffleResolver {
  constructor(private readonly raffleService: RaffleService) {}

  @Auth([ROLE.ADMIN])
  @Mutation(() => String)
  async updateRaffle(
    @Args('input') input: UpdateRaffleInput,
  ): Promise<Boolean> {
    return await this.raffleService.updateRaffleDetails(input);
  }

  @Query(() => [Raffle], { nullable: true })
  async getRaffleDetails(): Promise<Raffle[]> {
    return await this.raffleService.getRaffleDetails();
  }

  //  @Mutation(() => Boolean, { nullable: true })
  //   async stakeRaffle(
  //     @Args('input') input: StakeRaffleInput,
  //   ): Promise<Boolean> {
  //     return await this.raffleService.();
  //   }
}
