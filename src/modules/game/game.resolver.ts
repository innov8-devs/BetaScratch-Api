import { GameCategoryCreateInput } from '@generated/prisma-nestjs-graphql/game-category/game-category-create.input';
import { GameCategory } from '@generated/prisma-nestjs-graphql/game-category/game-category.model';
import { GameCreateInput } from '@generated/prisma-nestjs-graphql/game/game-create.input';
import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'modules/auth/auth.service';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { MyContext } from 'types/constants/types';
import {
  CartCheckoutInput,
  CartDetailInput,
  GameCateogorySearch,
  GamePaginationInput,
  UpdateGameInput,
} from './dto/game.request';
import { GameCategoryReturnType, TotalGameCount } from './dto/game.response';
import { GameService } from './game.service';

@Resolver(() => Game)
export class GameResolver {
  constructor(
    private readonly gameService: GameService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => Game)
  async createGame(@Args('input') input: GameCreateInput): Promise<Game> {
    return await this.gameService.createGame(input);
  }

  @Mutation(() => GameCategory)
  async createGameCategory(
    @Args('input') input: GameCategoryCreateInput,
  ): Promise<GameCategory> {
    return await this.gameService.createGameCategory(input);
  }

  @Mutation(() => Boolean)
  async editGame(
    @Args('gameId') gameId: number,
    @Args('input') input: UpdateGameInput,
  ): Promise<Boolean> {
    return await this.gameService.editGame(gameId, input);
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

  @Query(() => Game, { nullable: true })
  findOneGame(@Args('gameId') gameId: string) {
    return this.gameService.findOneGame({ id: Number(gameId) });
  }

  @Query(() => [GameCategoryReturnType], { nullable: true })
  findAllGamesByCategories(@Args('input') input: GameCateogorySearch) {
    return this.gameService.findAllGamesByCategories(input);
  }

  @Query(() => [GameCategory], { nullable: true })
  findAllGameCategories() {
    return this.gameService.findAllGameCategories();
  }

  @Query(() => TotalGameCount)
  async totalGameCount() {
    return await this.gameService.totalGameCount();
  }

  @Query(() => [Game])
  async getAllCartDetails(@Args('input') input: CartDetailInput) {
    return await this.gameService.getAllCartDetails(input);
  }

  @Auth([ROLE.USER])
  @Mutation(() => [Game])
  async checkout(
    @Args('input') input: CartCheckoutInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res);
    return await this.gameService.cartCheckout(user.id, input);
  }
}
