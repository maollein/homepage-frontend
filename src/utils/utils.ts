import { IBlogPost } from "../types/types";
import { IUserInfo } from "../types/types";

export const sortBlogsByCreatedAt = () => {
  return (a: IBlogPost, b: IBlogPost): 1 | -1 => {
    if (a.created_at > b.created_at) return -1; // Expects dates to be in ISO-8601
    else return 1;
  }; 
};

export const hydrateUser = (): IUserInfo | null => {
  const userString = sessionStorage.getItem('user');
  if (!userString) return null;
  const user = JSON.parse(userString);
  return user;
};

export const dateToUIFormat = (date: string): string => {
  const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return new Date(date).toLocaleDateString(undefined, options);
};