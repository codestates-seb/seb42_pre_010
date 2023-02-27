import axios from 'axios';

export const getAllQuestion = async () => {
  const res = await axios.get('/questions?page=1&size=100');
  return res.data.data;
  // const questionData = res.data
  //   .map((e) => e.questionData)
  //   .reduce((a, c) => a.concat(c));
  // return questionData;
};
