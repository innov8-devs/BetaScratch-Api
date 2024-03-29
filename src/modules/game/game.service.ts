import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, TRANSACTION_TYPE } from '@prisma/client';
import { MESSAGES } from 'core/messages';
import { computeCart } from 'helpers/computeCartData';
import { computeCheckoutMessageCards } from 'helpers/computeCheckoutMessageCards';
import { MessageService } from 'modules/message/message.service';
import { TransactionService } from 'modules/transaction/transaction.service';
import {
  GAME_STATUS,
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  PURCHASE_STATUS,
  TRANSACTION,
} from 'types/constants/enum';
import {
  generateRandomNumbers,
  generateRandomString,
} from 'utils/generateRandomString.util';
import { Game } from '../../@generated/prisma-nestjs-graphql/game/game.model';
import { PrismaService } from '../prisma.service';
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
import { GameCategoryReturnType } from './dto/game.response';
import { v4 } from 'uuid';
import Stripe from 'stripe';
import { SmsService } from 'modules/sms/sms.service';
import { CouponService } from 'modules/coupon/coupon.service';

@Injectable()
export class GameService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly transactionService: TransactionService,
    private readonly couponService: CouponService,
    private readonly messageService: MessageService,
    private readonly smsService: SmsService,
  ) {}

  async findOneGame(input: Prisma.GameWhereUniqueInput): Promise<Game> {
    return await this.prismaService.game.findUnique({
      where: input,
    });
  }

  async editGame(input: UpdateGameInput) {
    const { id, ...rest } = input;
    try {
      await this.prismaService.game.update({
        where: {
          id,
        },
        data: {
          ...rest,
        },
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  async findAllGames(): Promise<Game[]> {
    return await this.prismaService.game.findMany({
      where: {
        status: { equals: GAME_STATUS.ACTIVE },
      },
    });
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
          status: { equals: GAME_STATUS.ACTIVE },
        },
        take: size,
        skip: skipValue,
      });
      let singleGame = { name: category, games: [...games] };
      gamesData = [...gamesData, singleGame];
    }
    return gamesData;
  }

  async createGame(input: CreateGameInput) {
    try {
      await this.prismaService.game.create({
        data: {
          ...input,
          gameId: v4(),
        },
      });
      return true;
    } catch (err) {
      return false;
    }
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
        status: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createGameCategory(input: Prisma.GameCategoryCreateInput) {
    try {
      await this.prismaService.gameCategory.create({
        data: {
          ...input,
        },
      });
      return true;
    } catch (err) {
      return false;
    }
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

    const checkCheckoutState = await this.prismaService.cart.findFirst({
      where: { userId },
    });

    if (!checkCheckoutState) {
      const referral = await this.prismaService.referral.findFirst({
        where: { referrals: { has: userId } },
      });
      if (referral) {
        const referrerAmount = (5 * amount) / 100;

        await this.prismaService.wallet.update({
          where: { userId: referral.userId },
          data: { withdrawable: { increment: referrerAmount }, bonus: 500 },
        });

        await this.prismaService.referral.update({
          where: { userId: referral.userId },
          data: {
            invitesFunded: { increment: 1 },
            totalEarned: { increment: referrerAmount },
          },
        });

        const refereeAmount = (3 * amount) / 100;

        await this.prismaService.wallet.update({
          where: { userId },
          data: { withdrawable: { increment: refereeAmount }, bonus: 500 },
        });
      }
    }

    await this.prismaService.wallet.update({
      where: { userId },
      data: {
        withdrawable: { decrement: amount },
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

    const checkCheckoutState = await this.prismaService.cart.findFirst({
      where: { userId },
    });

    if (!checkCheckoutState) {
      const referral = await this.prismaService.referral.findFirst({
        where: { referrals: { has: userId } },
      });
      if (referral) {
        const referrerAmount = (5 * amount) / 100;

        await this.prismaService.wallet.update({
          where: { userId: referral.userId },
          data: {
            withdrawable: { increment: referrerAmount },
            bonus: { increment: 500 },
          },
        });

        await this.prismaService.referral.update({
          where: { userId: referral.userId },
          data: {
            invitesFunded: { increment: 1 },
            totalEarned: { increment: referrerAmount },
          },
        });

        const refereeAmount = (3 * amount) / 100;

        await this.prismaService.wallet.update({
          where: { userId },
          data: {
            withdrawable: { increment: refereeAmount },
            bonus: { increment: 500 },
          },
        });
      }
    }

    return true;
  }

  async recordPurchase(
    userId: number,
    cartDetail: any,
    transactionRef: string,
    subtotal: number,
    transactionType: TRANSACTION_TYPE,
    status?: string,
    couponId?: number,
  ) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    await this.prismaService.purchase.create({
      data: {
        subtotal,
        email: user.email,
        username: user.username,
        quantity: cartDetail.length,
        reference: transactionRef,
        status: status ? status : PURCHASE_STATUS.ACTIVE,
        transactionType,
        userId,
        coupon: couponId && { connect: { id: couponId } },
        couponUsed: couponId ? true : false,
        cards: {
          createMany: {
            data: cartDetail,
          },
        },
      },
    });
  }

  async cartCheckout(userId: number, input: CartCheckoutInput) {
    let newSubtotal: number;
    let coupon;
    const userWallet = await this.prismaService.wallet.findUnique({
      where: { userId },
    });

    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    const transactionRef = generateRandomString();
    const cartDetail = computeCart(input.cart, userId, transactionRef);
    const messageCards = computeCheckoutMessageCards(
      input.cart,
      userId,
      transactionRef,
    );

    if (input.couponCode) {
      coupon = await this.prismaService.coupon.findUnique({
        where: { code: input.couponCode },
      });
      if (!coupon) newSubtotal = input.subtotal;
      const calculateSubtotal =
        await this.couponService.calculateCouponSubtotal({
          couponCode: input.couponCode,
          subtotal: input.subtotal,
        });
      newSubtotal = calculateSubtotal.subtotal;
    } else newSubtotal = input.subtotal;

    if (input.transaction_type === TRANSACTION.WALLET) {
      console.log('Calculated: ', newSubtotal);
      const response = await this.checkoutWithAccount(
        userId,
        newSubtotal,
        userWallet,
      );
      if (response === true) {
        input.couponCode
          ? await this.recordPurchase(
              userId,
              cartDetail,
              transactionRef,
              newSubtotal,
              TRANSACTION_TYPE.WALLET,
              PURCHASE_STATUS.ACTIVE,
              coupon.id,
            )
          : await this.recordPurchase(
              userId,
              cartDetail,
              transactionRef,
              newSubtotal,
              TRANSACTION_TYPE.WALLET,
            );
        await this.transactionService.calculateVipProgress(userId);
        await this.transactionService.cashback(userId, newSubtotal);
        await this.transactionService.createTransaction({
          amount: newSubtotal,
          currency: userWallet.currency,
          purpose: PAYMENT_PURPOSE.CART,
          status: PAYMENT_STATUS.SUCCESSFUL,
          transactionId: generateRandomNumbers(),
          transactionRef,
          type: TRANSACTION.WALLET,
          user: { connect: { id: userId } },
        });
        if (input.couponCode)
          await this.couponService.incrementCouponQuantityUsed(coupon.code);
        await this.messageService.sendCheckoutMessage(userId, messageCards);
        await this.smsService.sendCheckoutSms(user.mobileNumber);
      } else {
        await this.transactionService.createTransaction({
          amount: newSubtotal,
          currency: userWallet.currency,
          purpose: PAYMENT_PURPOSE.CART,
          status: PAYMENT_STATUS.FAILED,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          type: TRANSACTION.WALLET,
          user: { connect: { id: userId } },
        });
      }
    } else if (input.transaction_type === TRANSACTION.BONUS) {
      const response = await this.checkoutWithBonus(
        userId,
        newSubtotal,
        userWallet,
      );
      if (response === true) {
        input.couponCode
          ? await this.recordPurchase(
              userId,
              cartDetail,
              transactionRef,
              newSubtotal,
              TRANSACTION_TYPE.BONUS,
              PURCHASE_STATUS.ACTIVE,
              coupon.id,
            )
          : await this.recordPurchase(
              userId,
              cartDetail,
              transactionRef,
              newSubtotal,
              TRANSACTION_TYPE.BONUS,
            );
        await this.transactionService.createTransaction({
          amount: newSubtotal,
          currency: userWallet.currency,
          purpose: PAYMENT_PURPOSE.CART,
          status: PAYMENT_STATUS.SUCCESSFUL,
          type: TRANSACTION.BONUS,
          transactionId: generateRandomNumbers(),
          transactionRef,
          user: { connect: { id: userId } },
        });
        if (input.couponCode)
          await this.couponService.incrementCouponQuantityUsed(coupon.code);
        await this.messageService.sendCheckoutMessage(userId, messageCards);
        await this.smsService.sendCheckoutSms(user.mobileNumber);
      } else {
        await this.transactionService.createTransaction({
          amount: newSubtotal,
          currency: userWallet.currency,
          purpose: PAYMENT_PURPOSE.CART,
          status: PAYMENT_STATUS.FAILED,
          type: TRANSACTION.BONUS,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          user: { connect: { id: userId } },
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

  async flutterCheckout(
    userId: number,
    input: FlutterCheckoutOneInput,
  ): Promise<Boolean> {
    let coupon;

    const userWallet = await this.prismaService.wallet.findUnique({
      where: { userId },
    });

    const initialSubtotal = input.subtotal;

    if (input.couponCode) {
      coupon = await this.prismaService.coupon.findUnique({
        where: { code: input.couponCode },
      });
    }

    const cartDetail = computeCart(input.cart, userId, input.tx_ref);

    input.couponCode
      ? await this.recordPurchase(
          userId,
          cartDetail,
          input.tx_ref,
          initialSubtotal,
          TRANSACTION_TYPE.FLUTTERWAVE,
          PURCHASE_STATUS.INACTIVE,
          coupon.id,
        )
      : await this.recordPurchase(
          userId,
          cartDetail,
          input.tx_ref,
          initialSubtotal,
          TRANSACTION_TYPE.FLUTTERWAVE,
          PURCHASE_STATUS.INACTIVE,
        );

    await this.transactionService.createTransaction({
      amount: initialSubtotal,
      currency: userWallet.currency,
      purpose: PAYMENT_PURPOSE.CART,
      status: PAYMENT_STATUS.PENDING,
      type: TRANSACTION.FLUTTERWAVE,
      transactionId: generateRandomNumbers(),
      transactionRef: input.tx_ref,
      user: { connect: { id: userId } },
    });

    return true;
  }

  async bankTransferCheckout(
    userId: number,
    input: BankTransferCheckoutInput,
  ): Promise<Boolean> {
    let coupon;
    const userWallet = await this.prismaService.wallet.findUnique({
      where: { userId },
    });

    if (input.couponCode) {
      coupon = await this.prismaService.coupon.findUnique({
        where: { code: input.couponCode },
      });
    }

    let calcSubtotal = 0;
    const transactionRef = generateRandomString();

    for (let item of input.cart) {
      const price = item.quantity * item.price.ngn;
      calcSubtotal += price;
    }

    if (input.couponCode) {
      coupon = await this.prismaService.coupon.findUnique({
        where: { code: input.couponCode },
      });
      const calculateSubtotal =
        await this.couponService.calculateCouponSubtotal({
          couponCode: input.couponCode,
          subtotal: calcSubtotal,
        });
      calcSubtotal = calculateSubtotal.subtotal;
    }

    if (!input.couponCode && input.subtotal !== calcSubtotal) {
      throw new BadRequestException({
        name: 'amount',
        message: 'Total does not correlate',
      });
    }

    const cartDetail = computeCart(input.cart, userId, transactionRef);

    input.couponCode
      ? await this.recordPurchase(
          userId,
          cartDetail,
          transactionRef,
          calcSubtotal,
          TRANSACTION_TYPE.BANK_TRANSFER,
          PURCHASE_STATUS.INACTIVE,
          coupon.id,
        )
      : await this.recordPurchase(
          userId,
          cartDetail,
          transactionRef,
          calcSubtotal,
          TRANSACTION_TYPE.BANK_TRANSFER,
          PURCHASE_STATUS.INACTIVE,
        );

    await this.transactionService.createTransaction({
      amount: calcSubtotal,
      currency: userWallet.currency,
      purpose: PAYMENT_PURPOSE.CART,
      status: PAYMENT_STATUS.PENDING,
      type: TRANSACTION_TYPE.BANK_TRANSFER,
      transactionId: generateRandomNumbers(),
      transactionRef,
      user: { connect: { id: userId } },
    });

    return true;
  }

  async getStripeTokenAndRecordPurchase(
    input: StripeCheckoutInput,
    userId: number,
  ) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2020-08-27',
    });

    let calcSubtotal = 0;

    for (let item of input.cart) {
      const price = item.quantity * item.price.usd;
      calcSubtotal += price;
    }

    const transactionRef = generateRandomString();

    const cartDetail = computeCart(input.cart, userId, transactionRef);

    await this.recordPurchase(
      userId,
      cartDetail,
      transactionRef,
      calcSubtotal,
      TRANSACTION_TYPE.STRIPE,
      PURCHASE_STATUS.INACTIVE,
    );

    // await this.transactionService.createTransaction({
    //   amount: calcSubtotal,
    //   currency: CURRENCY.USD,
    //   purpose: PAYMENT_PURPOSE.CART,
    //   status: PAYMENT_STATUS.PENDING,
    //   type: TRANSACTION.STRIPE,
    //   transactionId: generateRandomNumbers(),
    //   transactionRef,
    //   user: { connect: { id: userId } },
    // });

    try {
      const amount = calcSubtotal;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      return {
        clientSecret: paymentIntent.client_secret,
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException({
        name: 'stripe',
        message: 'could not initiate payment',
      });
    }
  }
}
