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

  public async sendCheckoutMessage(userId: number) {
    await this.createMessage(userId, {
      title: 'Your Payment is successful',
      link: WHATSAPP_URL,
      description:
        'To play this card, kindly click on the link here to play with our agent via the whatsapp video call',
      messageType: MESSAGE_TYPE.CART,
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
}
