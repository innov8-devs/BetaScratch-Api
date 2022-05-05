export const calculateVipStatus = (amount: number) => {
  if (amount > 500 && amount <= 20000) return 'Bronze';
  else if (amount > 20000 && amount <= 50000) return 'Silver';
  else if (amount > 50000 && amount <= 100000) return 'Gold';
  else if (amount > 100000 && amount <= 500000) return 'Ruby';
  else if (amount > 500000 && amount <= 1000000) 'Saphire';
  else if (amount > 1000000) return 'Diamond';
  else return 'None';
};
