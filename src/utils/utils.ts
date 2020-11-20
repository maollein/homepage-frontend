import { IBlogPost } from "../types/types";

export const sortBlogsByCreatedAt = () => {
  return (a: IBlogPost, b: IBlogPost): 1 | -1 => {
    if (a.created_at > b.created_at) return -1; // Expects dates to be in ISO-8601
    else return 1;
  }; 
};