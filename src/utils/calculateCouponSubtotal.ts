export const calculateCouponSubtotal = (
  subtotal: number,
  couponPercentage: number,
  couponCap?: number,
): number => {
  const percentagePrice = (subtotal * couponPercentage) / 100;
  const calculatedPrice = subtotal - percentagePrice;
  if (couponCap)
    return calculatedPrice > couponCap ? couponCap : calculatedPrice;
  else return calculatedPrice;
};
