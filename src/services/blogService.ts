import httpClient from './httpClient';
import { IBlogPost, INewBlogPost } from '../types/types';
const BASE_URL = '/api/blog';

const getPosts = async (search: string): Promise<IBlogPost[]> => {
  const { data: blogs } = await httpClient.get(`${BASE_URL}${search}`);
  return blogs;
};

const getPost = async (id: string): Promise<IBlogPost> => {
  const { data: post } = await httpClient.get(`${BASE_URL}/${id}`);
  return post;
};

const postPost = async (post: INewBlogPost): Promise<IBlogPost> => {
  const { data: addedPost } = await httpClient.post(BASE_URL, post);
  return addedPost;
};

const deletePost = async (blogId: number): Promise<{ response: string }> => {
  const { data: response } = await httpClient.delete(`${BASE_URL}/${blogId}`);
  return response;
};

const getMonths = async (): Promise<string[]> => {
  const { data: months } = await httpClient.get(`${BASE_URL}/months`);
  return months;
};

const getPostCount = async (): Promise<number> => {
  const { data: count } = await httpClient.get(`${BASE_URL}/postcount`);
  return count.count;
};

export default {
  getPosts,
  getPost,
  postPost,
  deletePost,
  getMonths,
  getPostCount
};