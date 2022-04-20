import { Request } from 'express';

export const parseCookies = (req: Request) => {
  const list: any = {};
  try {
    const cookieHeader = req.headers.cookie;
    if (!cookieHeader) return list;
    cookieHeader.split(';').forEach((cookie) => {
      let [name, ...rest] = cookie.split('=');
      name = name.trim();
      if (!name) return;
      const value = rest.join('=').trim();
      if (!value) return;
      list[name] = decodeURIComponent(value);
    });
    return list;
  } catch (err) {
    return list;
  }
};
