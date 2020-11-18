import { IUserInfo } from "../types/types";

export const hydrateUser = (): IUserInfo | null => {
  const userString = sessionStorage.getItem('user');
  if (!userString) return null;
  const user = JSON.parse(userString);
  return user;
};