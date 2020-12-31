import { TestAPI } from '../config/api';

export async function getList () {
  let response = await TestAPI.get('/users');
  return response;
}
