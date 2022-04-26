export enum ROLE {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum CURRENCY {
  NGN = 'NGN',
  USD = 'USD',
}

export enum PAYMENT_STATUS {
  PENDING = 'PENDING',
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',
}

export enum PAYMENT_PURPOSE {
  DEPOSIT = 'DEPOSIT',
  PURCHASE = 'PURCHASE',
  FLUTTERWAVE = 'FLUTTERWAVE',
  CARD = 'CART',
  DEDUCT_WITHDRAWAL_BALANCE = 'DEDUCT WITHDRAWAL BALANCE',
  CASH_BACK = 'CASH BACK',
  DEDUCT_BONUS_BALANCE = 'DEDUCT BONUS BALANCE',
}

export enum WALLET_TYPE {
  WITHDRAWABLE = 'WITHDRAWABLE',
  BONUS = 'BONUS',
}

export enum AUTH_TYPE {
  CONFIRM_USER_PREFIX = 'confirm user',
  REQUEST_NEW_TOKEN = 'request new token',
  FORGOT_PASSWORD = 'forgot password',
}

export enum TRANSACTION {
  REQUEST_WITHDRAWAL = 'REQUEST WITHDRAWAL',
  BONUS = 'BONUS',
  FLUTTERWAVE = 'FLUTTERWAVE',
  ACCOUNT = 'ACCOUNT',
}
