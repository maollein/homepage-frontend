import httpClient from './httpClient';
import { IBlogPost } from '../types/types';
const BASE_URL = '/api/blog';

const getPosts = async (): Promise<IBlogPost[]> => {
  const { data: blogs } = await httpClient.get(BASE_URL);
  return blogs;
};

const getPost = async (id: string): Promise<IBlogPost> => {
  const { data: post } = await httpClient.get(`${BASE_URL}/${id}`);
  return post;
};

export default {
  getPosts,
  getPost
};