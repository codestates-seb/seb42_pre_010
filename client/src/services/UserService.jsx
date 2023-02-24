import axios from 'axios';

export const getAllUsers = async () => {
  const usersData = await axios.get('http://localhost:3001/users');
  return usersData.data;
};
