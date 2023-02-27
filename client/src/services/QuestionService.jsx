import axios from 'axios';

export const getAllQuestion = async () => {
  const res = await axios
    .get('/questions?page=1&size=1000')
    .catch(() => console.log('Error!'));
  return res.data.data;
};
