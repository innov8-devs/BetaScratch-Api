export const calculateCouponSubtotal = (
  subtotal: number,
  couponPercentage: number,
  couponCap?: number,
): number => {
  const percentagePrice = (subtotal * couponPercentage) / 10;
  if (couponCap)
    return percentagePrice > couponCap ? couponCap : percentagePrice;
  else return percentagePrice;
};
