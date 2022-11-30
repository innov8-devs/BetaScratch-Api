import { Cart } from '@generated/prisma-nestjs-graphql/cart/cart.model';
import { GameCategoryCreateInput } from '@generated/prisma-nestjs-graphql/game-category/game-category-create.input';
import { GameCategory } from '@generated/prisma-nestjs-graphql/game-category/game-category.model';
import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'modules/auth/auth.service';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { MyContext } from 'types/constants/types';
import {
  BankTransferCheckoutInput,
  CartCheckoutInput,
  CartDetailInput,
  CreateGameInput,
  FlutterCheckoutOneInput,
  GameCateogorySearch,
  GamePaginationInput,
  PurchaseSearch,
  StripeCheckoutInput,
  UpdateGameInput,
} from './dto/game.request';
import {
  GameCategoryReturnType,
  StripeTokenResponse,
  TotalGameCount,
} from './dto/game.response';
import { GameService } from './game.service';

@Resolver(() => Game)
export class GameResolver {
  constructor(
    private readonly gameService: GameService,
    private readonly authService: AuthService,
  ) {}

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async createGame(
    @Args('input') input: CreateGameInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Boolean> {
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      true,
      user.role,
    );
    return await this.gameService.createGame(input);
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async createGameCategory(
    @Args('input') input: GameCategoryCreateInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Boolean> {
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      true,
      user.role,
    );
    return await this.gameService.createGameCategory(input);
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async editGame(
    @Args('input') input: UpdateGameInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<Boolean> {
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      true,
      user.role,
    );
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

  @Query(() => Game, { nullable: true })
  getSingleGame(@Args('gameId') gameId: number) {
    return this.gameService.findOneGame({ id: gameId });
  }

  @Query(() => [GameCategoryReturnType], { nullable: true })
  findAllGamesByCategories(@Args('input') input: GameCateogorySearch) {
    return this.gameService.findAllGamesByCategories(input);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => [GameCategory], { nullable: true })
  async findAllGameCategories(
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      true,
      user.role,
    );
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
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      false,
      user.role,
    );
    return await this.gameService.cartCheckout(user.id, input);
  }

  @Auth([ROLE.USER])
  @Mutation(() => [Cart])
  async purchaseHistory(
    @Args('input') input: PurchaseSearch,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      false,
      user.role,
    );
    return await this.gameService.purchaseHistory(user.id, input);
  }

  @Auth([ROLE.USER])
  @Mutation(() => Boolean)
  async flutterCheckout(
    @Args('input') input: FlutterCheckoutOneInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      false,
      user.role,
    );
    return await this.gameService.flutterCheckout(user.id, input);
  }

  @Auth([ROLE.USER])
  @Mutation(() => Boolean)
  async bankTransferCheckout(
    @Args('input') input: BankTransferCheckoutInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ) {
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      false,
      user.role,
    );
    return await this.gameService.bankTransferCheckout(user.id, input);
  }

  @Auth([ROLE.USER])
  @Query(() => StripeTokenResponse)
  async getStripeTokenAndRecordPurchase(
    @Args('input') input: StripeCheckoutInput,
    @CurrentUser() user: User,
    @Context() { res }: MyContext,
  ): Promise<StripeTokenResponse> {
    await this.authService.setAccessTokenHeaderCredentials(
      user.id,
      res,
      false,
      user.role,
    );
    return await this.gameService.getStripeTokenAndRecordPurchase(
      input,
      user.id,
    );
  }

  // @Auth([ROLE.USER])
  // @Mutation(() => User)
  // async flutterCheckoutTwo(
  //   @Args('input') input: FlutterCheckoutTwoInput,
  //   @CurrentUser() user: User,
  //   @Context() { res }: MyContext,
  // ) {
  //   await this.authService.setAccessTokenHeaderCredentials(user.id, res, false);
  //   return await this.gameService.flutterCheckoutTwo(input, user.id);
  // }

  // @Query(() => Boolean)
  // async testTermii() {
  //   return this.gameService.testTermii();
  // }
}
