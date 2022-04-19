import { GameCreateInput } from '@generated/prisma-nestjs-graphql/game/game-create.input';
import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';

@Resolver(() => Game)
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Mutation(() => Game)
  async createGame(@Args('input') input: GameCreateInput): Promise<Game> {
    return await this.gameService.createGame(input);
  }

  @Query(() => [Game])
  findAllGames() {
    return this.gameService.findAllGames();
  }
}
