import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MESSAGES } from 'core/messages';
import { TransactionService } from 'modules/transaction/transaction.service';
import {
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  TRANSACTION,
} from 'types/constants/enum';
import {
  generateRandomNumbers,
  generateRandomString,
} from 'utils/generateRandomString.util';
import { Game } from '../../@generated/prisma-nestjs-graphql/game/game.model';
import { PrismaService } from '../prisma.service';
import {
  CartCheckoutInput,
  CartDetailInput,
  GameCateogorySearch,
  GamePaginationInput,
  PurchaseSearch,
} from './dto/game.request';
import { GameCategoryReturnType } from './dto/game.response';

@Injectable()
export class GameService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly transactionService: TransactionService,
  ) {}

  async findOneGame(input: Prisma.GameWhereUniqueInput): Promise<Game> {
    return await this.prismaService.game.findUnique({
      where: input,
    });
  }

  async editGame(gameId: number, input: Prisma.GameUpdateInput) {
    await this.prismaService.game.update({
      where: {
        id: gameId,
      },
      data: {
        ...input,
      },
    });
    return true;
  }

  async findAllGames(): Promise<Game[]> {
    return await this.prismaService.game.findMany();
  }

  async findAllGamesByCategories(input: GameCateogorySearch) {
    const { page, size } = input;
    // let skipValue = Number(page + '0');
    let skipValue = page * size - size;
    let gamesData: GameCategoryReturnType[] = [];
    for (let category of input.categories) {
      let games = await this.prismaService.game.findMany({
        where: {
          category: {
            equals: category,
          },
        },
        take: size,
        skip: skipValue,
      });
      let singleGame = { name: category, games: [...games] };
      gamesData = [...gamesData, singleGame];
    }
    return gamesData;
  }

  async createGame(input: Prisma.GameCreateInput) {
    return await this.prismaService.game.create({
      data: {
        ...input,
      },
    });
  }

  async totalGameCount() {
    return await this.prismaService.game.aggregate({
      _count: true,
    });
  }

  async findAllGamesPaginated(input?: GamePaginationInput) {
    const { skip, take } = input;
    return await this.prismaService.game.findMany({
      skip,
      take,
      select: {
        id: true,
        availability: true,
        category: true,
        description: true,
        gameId: true,
        imageUrl: true,
        name: true,
        price: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createGameCategory(input: Prisma.GameCategoryCreateInput) {
    return await this.prismaService.gameCategory.create({
      data: {
        ...input,
      },
    });
  }

  async findAllGameCategories() {
    return await this.prismaService.gameCategory.findMany();
  }

  async getAllCartDetails(input: CartDetailInput) {
    return await this.prismaService.game.findMany({
      where: {
        id: { in: input.gameIds },
      },
    });
  }

  async checkoutWithAccount(
    userId: number,
    amount: number,
    userWallet: Wallet,
  ) {
    if (amount > userWallet.withdrawable) {
      throw new BadRequestException({
        name: 'account',
        message: MESSAGES.USER.INSUFFICIENT_WALLET_FUND,
      });
    }

    await this.prismaService.wallet.update({
      where: { userId },
      data: {
        withdrawable: userWallet.withdrawable - amount,
      },
    });
    return true;
  }

  async checkoutWithBonus(userId: number, amount: number, userWallet: Wallet) {
    if (amount > userWallet.bonus) {
      throw new BadRequestException({
        name: 'bonus',
        message: MESSAGES.USER.INSUFFICIENT_WALLET_FUND,
      });
    }

    await this.prismaService.wallet.update({
      where: { userId },
      data: {
        bonus: userWallet.bonus - amount,
      },
    });
    return true;
  }

  async cartCheckout(userId: number, input: CartCheckoutInput) {
    const userWallet = await this.prismaService.wallet.findUnique({
      where: { userId },
    });
    const cartDetail = [];

    for (let item of input.cart) {
      cartDetail.push({
        category: item.category,
        imageUrl: item.imageUrl,
        name: item.name,
        price: {
          eur: item.price.eur,
          usd: item.price.usd,
          ngn: item.price.ngn,
          gbp: item.price.gbp,
        },
        quantity: item.quantity,
        userId: userId,
      });
    }

    if (input.transaction_type === TRANSACTION.ACCOUNT) {
      const response = await this.checkoutWithAccount(
        userId,
        input.subtotal,
        userWallet,
      );
      if (response === true) {
        await this.prismaService.cart.createMany({
          data: cartDetail,
        });
        await this.transactionService.cashback(userId, input.subtotal);
        await this.transactionService.createTransaction({
          amount: input.subtotal,
          currency: userWallet.currency,
          purpose: input.transaction_type,
          status: PAYMENT_STATUS.SUCCESSFUL,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          User: { connect: { id: userId } },
        });
      } else {
        await this.transactionService.createTransaction({
          amount: input.subtotal,
          currency: userWallet.currency,
          purpose: input.transaction_type,
          status: PAYMENT_STATUS.FAILED,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          User: { connect: { id: userId } },
        });
      }
    } else if (input.transaction_type === TRANSACTION.BONUS) {
      const response = await this.checkoutWithBonus(
        userId,
        input.subtotal,
        userWallet,
      );
      if (response === true) {
        await this.prismaService.cart.createMany({
          data: cartDetail,
        });
        await this.transactionService.createTransaction({
          amount: input.subtotal,
          currency: userWallet.currency,
          purpose: input.transaction_type,
          status: PAYMENT_STATUS.SUCCESSFUL,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          User: { connect: { id: userId } },
        });
      } else {
        await this.transactionService.createTransaction({
          amount: input.subtotal,
          currency: userWallet.currency,
          purpose: input.transaction_type,
          status: PAYMENT_STATUS.FAILED,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          User: { connect: { id: userId } },
        });
      }
    } else if (input.transaction_type === TRANSACTION.FLUTTERWAVE) {
      const { status } =
        await this.transactionService.verifyFlutterWaveTransaction(
          input.transaction_id,
          PAYMENT_PURPOSE.FLUTTERWAVE,
          userId,
        );
      if (status === 'successful') {
        await this.transactionService.cashback(userId, input.subtotal);
      }
      if (status === 'failed') {
        throw new BadRequestException({
          name: 'payment',
          message: 'payment failed',
        });
      }
    } else {
      throw new BadRequestException({
        name: 'checkout',
        message: 'Invalid payment method',
      });
    }

    return await this.prismaService.user.findUnique({
      where: { id: userId },
      include: { wallet: true },
    });
  }

  async purchaseHistory(userId: number, input: PurchaseSearch) {
    const { page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.cart.findMany({
      where: {
        userId,
      },
      take: size,
      skip: skipValue,
      orderBy: {
        id: 'desc',
      },
    });
  }
}
