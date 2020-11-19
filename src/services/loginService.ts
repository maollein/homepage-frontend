import { AxiosResponse } from 'axios';
import { IUserInfo } from '../types/types';
import httpClient from './httpClient';

const login = async (username: string, password: string): Promise<IUserInfo> => {
  const response = await httpClient.post(`/api/login`, { username, password });
  return response.data;
};

const logout = async (): Promise<AxiosResponse> => {
  const response = await httpClient.post('/api/logout');
  return response;
};

export default {
  login,
  logout
};