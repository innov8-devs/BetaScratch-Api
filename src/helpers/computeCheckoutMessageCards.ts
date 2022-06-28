import { CartItems } from 'modules/game/dto/game.request';
import { computeCart } from './computeCartData';

export const computeCheckoutMessageCards = (
  cartItems: CartItems[],
  userId: number,
  reference: string,
) => {
  const result = [];

  const cartDetail = computeCart(cartItems, userId, reference);

  for (let item of cartDetail) {
    result.push({
      name: item.name,
      isPlayed: false,
      reference_id: item.reference,
    });
  }

  return result;
};
