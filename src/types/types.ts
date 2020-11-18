export interface IBlogPost {
  title: string;
  content: string;
  created_at: string;
  modified_at: string | null;
  id: number;
}

export interface IUserInfo {
  username: string;
  name: string;
  id: number; 
}