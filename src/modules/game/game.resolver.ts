import { Cart } from '@generated/prisma-nestjs-graphql/cart/cart.model';
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
  FlutterCheckoutOneInput,
  FlutterCheckoutTwoInput,
  GameCateogorySearch,
  GamePaginationInput,
  PurchaseSearch,
  UpdateGameInput,
} from './dto/game.request';
import {
  FlutterCheckoutOneReturnType,
  GameCategoryReturnType,
  TotalGameCount,
} from './dto/game.response';
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

  @Mutation(() => Game)
  async editGame(@Args('input') input: UpdateGameInput): Promise<Game> {
    return await this.gameService.editGame(input);
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
  @Mutation(() => User)
  async checkout(
    @Args('input') input: CartCheckoutInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.gameService.cartCheckout(user.id, input);
  }

  @Auth([ROLE.USER])
  @Mutation(() => [Cart])
  async purchaseHistory(
    @Args('input') input: PurchaseSearch,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.gameService.purchaseHistory(user.id, input);
  }

  @Auth([ROLE.USER])
  @Mutation(() => FlutterCheckoutOneReturnType)
  async flutterCheckoutOne(
    @Args('input') input: FlutterCheckoutOneInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.gameService.flutterCheckoutOne(user.id, input);
  }

  @Auth([ROLE.USER])
  @Mutation(() => User)
  async flutterCheckoutTwo(
    @Args('input') input: FlutterCheckoutTwoInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
    return await this.gameService.flutterCheckoutTwo(input, user.id);
  }
}
