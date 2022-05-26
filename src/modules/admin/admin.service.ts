import { Injectable } from '@nestjs/common';
import { PrismaService } from 'modules/prisma.service';
import {
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  TRANSACTION,
} from 'types/constants/enum';

@Injectable()
export class AdminService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getDashboardData() {
    let tabs = [];
    // let purchasedToday = [];
    let cumulativeRevenueToday = 0;
    let totalFlutterRevenue = 0;
    const currentDate = new Date().getDate();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const totalUserCount = await this.prismaService.user.count();
    const totalWithdrawalCount = await this.prismaService.transaction.count({
      where: {
        AND: [
          {
            purpose: { equals: TRANSACTION.WITHDRAWAL },
          },
          {
            status: { equals: PAYMENT_STATUS.SUCCESSFUL },
          },
        ],
      },
    });
    const totalPurchases = await this.prismaService.transaction.count({
      where: {
        purpose: PAYMENT_PURPOSE.CART,
      },
    });
    const totalCardsPurchased = await this.prismaService.cart.count({});
    const totalFlutterTransactions =
      await this.prismaService.transaction.findMany({
        where: { type: TRANSACTION.FLUTTERWAVE },
      });
    for (let transacton of totalFlutterTransactions) {
      totalFlutterRevenue += transacton.amount;
    }

    const registeredToday = await this.prismaService.user.count({
      where: {
        AND: [
          {
            createdAt: {
              in: new Date(
                `${currentYear}-${currentMonth}-${currentDate}`,
              ).toISOString(),
            },
          },
        ],
      },
    });

    const totalRevenueToday = await this.prismaService.transaction.findMany({
      where: {
        OR: [
          {
            type: { equals: TRANSACTION.FLUTTERWAVE },
          },
          {
            type: { equals: TRANSACTION.ACCOUNT },
          },
        ],
        AND: [
          { purpose: { equals: PAYMENT_PURPOSE.CART } },
          {
            status: { equals: PAYMENT_STATUS.SUCCESSFUL },
          },
          {
            createdAt: {
              in: new Date(
                `${currentYear}-${currentMonth}-${currentDate}`,
              ).toISOString(),
            },
          },
        ],
      },
    });
    for (let revenue of totalRevenueToday) {
      cumulativeRevenueToday += revenue.amount;
    }

    tabs.push(
      {
        title: 'players',
        value: totalUserCount,
      },
      {
        title: 'withdraw',
        value: totalWithdrawalCount,
      },
      {
        title: 'purchase',
        value: totalPurchases,
      },
      {
        title: 'cards',
        value: totalCardsPurchased,
      },
      {
        title: 'revenue',
        value: totalFlutterRevenue,
      },
      {
        title: 'registeredToday',
        value: registeredToday,
      },
      {
        title: 'revenueToday',
        value: cumulativeRevenueToday,
      },
    );

    console.log(tabs);

    return true;
  }
}
