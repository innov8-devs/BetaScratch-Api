import { Controller, Post, Req, Res } from '@nestjs/common';
import { FLUTTER_TRANSACTION_TYPE } from 'types/constants/enum';
import { Request, Response } from 'express';
import { splitFlutterRef } from 'helpers/splitFlutterRef';
import { TransactionService } from './transaction.service';

@Controller('api/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('flutterwave-webhook')
  async verifyFlutterTransaction(@Res() res: Response, @Req() req: Request) {
    const transactionType = splitFlutterRef(req.body.data.tx_ref);
    if (transactionType === FLUTTER_TRANSACTION_TYPE.CHECKOUT) {
      return await this.transactionService.verifyCheckout(req.body.data, res);
    } else if (transactionType === FLUTTER_TRANSACTION_TYPE.DEPOSIT) {
      return await this.transactionService.verifyDeposit(req.body.data, res);
    }
  }
}
