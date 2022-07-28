import { CartItems } from 'modules/game/dto/game.request';
// import { generateRandomString } from 'utils/generateRandomString.util';

export const computeCart = (
  data: CartItems[],
  userId: number,
  transactionRef: string,
) => {
  const cartDetail = [];

  for (let item of data) {
    let gameQuantity = item.quantity;
    while (gameQuantity > 0) {
      cartDetail.push({
        category: item.category,
        imageUrl: item.imageUrl,
        name: item.name,
        reference: transactionRef,
        price: {
          eur: item.price.eur,
          usd: item.price.usd,
          ngn: item.price.ngn,
          gbp: item.price.gbp,
        },
        quantity: 1,
        userId: userId,
        transactionRef: transactionRef ? transactionRef : '',
      });
      gameQuantity--;
    }
  }

  return cartDetail;
};
