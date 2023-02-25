import axios from 'axios';

export const getAllUsers = async () => {
  const usersData = await axios.get('/users?page=1&size=1000');
  return usersData.data;
};
