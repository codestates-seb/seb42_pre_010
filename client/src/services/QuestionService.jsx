import axios from 'axios';

export const getAllQuestion = async () => {
  const res = await axios.get('http://localhost:3001/questions');
  const questionData = res.data
    .map((e) => e.questionData)
    .reduce((a, c) => a.concat(c));
  return questionData;
};
