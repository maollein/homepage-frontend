export interface IBlogPost {
  title: string;
  content: string;
  created_at: string;
  modified_at: string | null;
  id: number;
}

export interface INewBlogPost {
  title: string,
  content: string
}

export interface IUserInfo {
  username: string;
  name: string;
  id: number; 
}