export const splitFlutterRef = (tx_ref: string) =>
  tx_ref.split('__')[0].toLowerCase();
