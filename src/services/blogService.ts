import axios from 'axios';
import { IBlogPost } from '../types/types';
import { BACKEND } from '../utils/globals';
const BASE_URL = `${BACKEND}/blog`;

const getPosts = async (): Promise<IBlogPost[]> => {
  const { data: blogs } = await axios.get(BASE_URL);
  return blogs;
};

export default {
  getPosts
};