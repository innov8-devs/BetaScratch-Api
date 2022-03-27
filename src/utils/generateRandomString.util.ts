// export const generateRandomString = (numberOfStrings: number) => {
//   let randomString = '';
//   let characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-----';

//   for (let i = 0; i < numberOfStrings; i++) {
//     randomString += characters.charAt(
//       Math.floor(Math.random() * characters.length),
//     );
//   }
//   return randomString;

// };

import { v4 } from 'uuid';

export const generateRandomString = (): string => v4();
