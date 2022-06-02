export let isAdmin: boolean;

export const authTypeGetterFn = () => isAdmin;

export const authTypeSetterFn = (admin: boolean) => {
  isAdmin = admin;
};
