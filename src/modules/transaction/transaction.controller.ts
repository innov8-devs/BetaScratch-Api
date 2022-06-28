import { Controller, Post, Req, Res } from '@nestjs/common';
import { FLUTTER_TRANSACTION_TYPE } from 'types/constants/enum';
import { Request, Response } from 'express';
import { splitFlutterRef } from 'helpers/splitFlutterRef';
import { TransactionService } from './transaction.service';

@Controller('api/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  //   TODO check for refferal
  @Post('flutterwave-webhook')
  async verifyFlutterTransaction(@Res() _res: Response, @Req() req: Request) {
    console.log(req.body);
    const transactionType = splitFlutterRef(req.body.tx_ref);
    if (transactionType === FLUTTER_TRANSACTION_TYPE.CHECKOUT) {
      console.log('Checkout');
      await this.transactionService.verifyCheckout(req.body);
    } else if (transactionType === FLUTTER_TRANSACTION_TYPE.DEPOSIT) {
      console.log('Deposit');
      await this.transactionService.verifyDeposit(req.body);
    }
  }
}
