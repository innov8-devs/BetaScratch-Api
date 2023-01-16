import { Raffle } from '@generated/prisma-nestjs-graphql/raffle/raffle.model';
import { StakedRaffleTickets } from '@generated/prisma-nestjs-graphql/staked-raffle-tickets/staked-raffle-tickets.model';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { ROLE } from 'types/constants/enum';
import { StakeRaffleInput, UpdateRaffleInput } from './dto/request.dto';
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

  @Auth([ROLE.USER])
  @Mutation(() => Boolean, { nullable: true })
  async stakeRaffle(
    @CurrentUser() user: User,
    @Args('input') input: StakeRaffleInput,
  ): Promise<Boolean> {
    return await this.raffleService.stakeUserRaffle(user.id, input);
  }

  @Auth([ROLE.ADMIN, ROLE.USER])
  @Query(() => [StakedRaffleTickets], { nullable: true })
  async findAllStakedRaffle(): Promise<StakedRaffleTickets[]> {
    return await this.raffleService.findAllStakedRaffle();
  }

  // @Auth([ROLE.USER, ROLE.ADMIN])
  // @Query(() => StakedRaffleTickets, { nullable: true })
  // async findOneStakedRaffle(
  //   @Args('raffleId') raffleId: number,
  // ): Promise<StakedRaffleTickets> {
  //   return await this.raffleService.findOneStakedRaffle(raffleId);
  // }
}
