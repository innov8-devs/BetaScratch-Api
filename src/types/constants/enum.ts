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

export enum COUNTRY {
  NIGERIA = 'Nigeria',
}

export enum PAYMENT_STATUS {
  PENDING = 'PENDING',
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',
  APPROVED = 'APPROVED',
}

export enum PAYMENT_PURPOSE {
  DEPOSIT = 'DEPOSIT',
  CART = 'CART',
  DEDUCT_WITHDRAWAL_BALANCE = 'DEDUCT_WITHDRAWAL_BALANCE',
  CASH_BACK = 'CASH_BACK',
  DEDUCT_BONUS_BALANCE = 'DEDUCT_BONUS_BALANCE',
}

export enum WALLET_TYPE {
  ACCOUNT = 'ACCOUNT',
  BONUS = 'BONUS',
}

export enum AUTH_TYPE {
  CONFIRM_USER_PREFIX = 'confirm user',
  REQUEST_NEW_TOKEN = 'request new token',
  FORGOT_PASSWORD = 'forgot password',
  ADMIN_LOGIN = 'admin login',
}

export enum TRANSACTION {
  REQUEST_WITHDRAWAL = 'REQUEST WITHDRAWAL',
  BONUS = 'BONUS',
  FLUTTERWAVE = 'FLUTTERWAVE',
  ACCOUNT = 'ACCOUNT',
  WITHDRAWAL = 'WITHDRAWAL',
}

export enum VERIFICATION {
  LICENSE_BACK_IMAGE = 'license_back_image',
  LICENSE_FRONT_IMAGE = 'license_front_image',
}

export enum MESSAGE_TYPE {
  CART = 'CART',
  WITHDRAWAL_PENDING = 'WITHDRAWAL_PENDING',
  WITHDRAWAL_APPROVED = 'WITHDRAWAL_APPROVED',
  WITHDRAWAL_REJECTED = 'WITHDRAWAL_REJECTED',
}

export enum IMAGE_TYPE {
  GAME = 'game',
}

export enum DB_TYPES {
  GAME = 'GAME',
  USER = 'USER',
  ADMIN = 'ADMIN',
  TRANSACTION = 'TRANSACTION',
  PURCHASE = 'PURCHASE',
  PENDING_WITHDRAWAL_REQUEST = 'PENDING_WITHDRAWAL_REQUEST',
  PENDING_VERIFICATION_REQUEST = 'PENDING_VERIFICATION_REQUEST',
}

export enum PURCHASE_STATUS {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
}

export enum GAME_STATUS {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
}
