import { IUserInfo } from '../types/types';
import httpClient from './httpClient';

const login = async (username: string, password: string): Promise<IUserInfo> => {
  const response = await httpClient.post(`/api/login`, {username, password});
  return response.data;
};

export default {
  login
};