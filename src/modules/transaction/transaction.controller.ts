import { Controller, Post, Req, Res } from '@nestjs/common';
// import { FLUTTER_TRANSACTION_TYPE } from 'types/constants/enum';
import { Request, Response } from 'express';
// import { splitFlutterRef } from 'helpers/splitFlutterRef';
import { TransactionService } from './transaction.service';
import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51FSb2LGjPPPKAYpWqahGhsDiEb9RFCIWpR5kvDyOAyWajimS1ZjbPDKYWVvxbwWl7kvoGfQkL3XBusBSiIwqv2XP00yFlvB9k2',
  {
    apiVersion: '2020-08-27',
  },
);

@Controller('api/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  // @Post('flutterwave-webhook')
  // async verifyFlutterTransaction(@Res() res: Response, @Req() req: Request) {
  //   const transactionType = splitFlutterRef(req.body.data.tx_ref);
  //   if (transactionType === FLUTTER_TRANSACTION_TYPE.CHECKOUT) {
  //     return await this.transactionService.verifyCheckout(req.body.data, res);
  //   } else if (transactionType === FLUTTER_TRANSACTION_TYPE.DEPOSIT) {
  //     return await this.transactionService.verifyDeposit(req.body.data, res);
  //   }
  // }

  @Post('flutterwave-webhook')
  async verifyFlutterTransaction(@Res() res: Response, @Req() req: Request) {
    console.log(req.body.data);
    return await this.transactionService.verifyDeposit(req.body.data, res);
  }

  @Post('stripe-webhook')
  async verifyStripeTransaction(@Res() res: Response, @Req() req: Request) {
    const sig = req.headers['stripe-signature'];
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.webhookSecret,
      );
    } catch (err) {
      res
        .status(400)
        .json({ error: { message: 'Could not confirm stripe payment' } });
    }

    if (event.type === 'payment_intent.created') {
      // const paymentIntent = event.data.object; //complete json data for use i.e {id, status, amount ...}
      console.log('Payment intent created');
    }
    if (event.type === 'payment_intent.cancelled') {
      console.log('Payment intent cancelled');
    }
    if (event.type === 'payment_intent.payment_failed') {
      console.log('Payment intent payment_failed');
    }
    if (event.type === 'payment_intent.processing') {
      console.log('Payment intent processing');
    }
    if (event.type === 'payment_intent.succeeded') {
      console.log('Payment intent succeeded');
    }
  }
}
