export const getAllQuestion = async () => {
  const response = await fetch('http://localhost:3001/questions');
  return await response.json();
};
