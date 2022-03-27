import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { Query, Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';

@Resolver(() => Game)
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query(() => [Game])
  findAllGames() {
    return this.gameService.findAllGames();
  }
}
