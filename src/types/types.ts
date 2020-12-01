export interface IBlogPost {
  title: string;
  content: string;
  created_at: string;
  modified_at: string | null;
  id: number;
  user_id: number;
}

export interface IContentBase {
  title: string;
  content: string;
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

export interface IAction {
  name: string;
  action: () => void;
}