import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/prisma.service';
import { WHATSAPP_URL } from 'types/constants';
import { MESSAGE_TYPE } from 'types/constants/enum';

@Injectable()
export class MessageService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createMessage(userId: number, input: Prisma.MessageCreateInput) {
    return await this.prismaService.message.create({
      data: {
        ...input,
        user: { connect: { id: userId } },
      },
    });
  }

  public async sendCheckoutMessage(userId: number, cards: any) {
    await this.createMessage(userId, {
      title: 'Your payment was successful',
      link: WHATSAPP_URL,
      description:
        'To play this card, kindly click on the link here to play with our agent via the whatsapp video call',
      messageType: MESSAGE_TYPE.CART,
      readStatus: 0,
      cards,
      user: { connect: { id: userId } },
    });
  }

  public async sendWithdrawalPending(userId: number) {
    await this.createMessage(userId, {
      title: 'Your Withdrawal request is pending',
      description: 'You would get a notification in 24 hours upon approval',
      messageType: MESSAGE_TYPE.WITHDRAWAL_PENDING,
      readStatus: 0,
      user: { connect: { id: userId } },
    });
  }

  public async sendWithdrawalApproved(userId: number) {
    await this.createMessage(userId, {
      title: 'Your Withdrawal request is approved',
      description: 'Your withdrawal request is successful',
      messageType: MESSAGE_TYPE.WITHDRAWAL_APPROVED,
      readStatus: 0,
      user: { connect: { id: userId } },
    });
  }

  public async changeMessageToRead(messageId: number) {
    await this.prismaService.message.update({
      where: { id: messageId },
      data: { readStatus: 1 },
    });
    return true;
  }

  public async getUserMessages(userId: number) {
    const unread = await this.prismaService.message.findMany({
      where: {
        AND: [
          {
            userId: { equals: userId },
          },
          {
            readStatus: { equals: 0 },
          },
        ],
      },
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
    });
    const read = await this.prismaService.message.findMany({
      where: {
        AND: [
          {
            userId: { equals: userId },
          },
          {
            readStatus: { equals: 1 },
          },
        ],
      },
      take: 5,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return {
      unread,
      read,
    };
  }
}
