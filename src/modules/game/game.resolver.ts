import { GameCreateInput } from '@generated/prisma-nestjs-graphql/game/game-create.input';
import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GameCateogorySearch,
  GamePaginationInput,
} from 'modules/user/dto/game.request';
import { TotalGameCount } from './dto/game.response';
import { GameService } from './game.service';

@Resolver(() => Game)
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Mutation(() => Game)
  async createGame(@Args('input') input: GameCreateInput): Promise<Game> {
    return await this.gameService.createGame(input);
  }

  @Query(() => [Game], { nullable: true })
  async findAllGamesPaginated(
    @Args('pagination', { nullable: true }) pagination?: GamePaginationInput,
  ): Promise<Game[]> {
    return this.gameService.findAllGamesPaginated(pagination);
  }

  @Query(() => [Game], { nullable: true })
  findAllGames() {
    return this.gameService.findAllGames();
  }

  @Query(() => [Game], { nullable: true })
  findAllGamesByCategories(@Args('input') input: GameCateogorySearch) {
    return this.gameService.findAllGamesByCategories(input);
  }

  @Query(() => TotalGameCount)
  async totalGameCount() {
    return await this.gameService.totalGameCount();
  }
}
