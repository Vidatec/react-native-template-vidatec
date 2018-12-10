import { TestAPI } from 'app/config/api';

export async function getList () {
  let response = await TestAPI.get('/users');
  return response;
}
