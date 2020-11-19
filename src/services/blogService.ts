import httpClient from './httpClient';
import { IBlogPost, INewBlogPost } from '../types/types';
const BASE_URL = '/api/blog';

const getPosts = async (): Promise<IBlogPost[]> => {
  const { data: blogs } = await httpClient.get(BASE_URL);
  return blogs;
};

const getPost = async (id: string): Promise<IBlogPost> => {
  const { data: post } = await httpClient.get(`${BASE_URL}/${id}`);
  return post;
};

const postPost = async (post: INewBlogPost): Promise<IBlogPost> => {
  const {data: addedPost } = await httpClient.post(BASE_URL, post);
  return addedPost;
};

export default {
  getPosts,
  getPost,
  postPost
};