import axios from 'axios';

export const getAllQuestion = async () => {
  const res = await axios.get('/questions?page=1&size=100');
  return res.data.data;
};
