import axios from 'axios';

/*
! aws 서버 배포 후 사용할 코드입니다... 지우지 말아주세요...
export const getAllQuestion = async () => {
  const res = await axios
    .get('/questions?page=1&size=1000')
    .catch(() => console.log('Error!'));
  return res.data.data;
};
*/

export const getAllQuestion = async () => {
  const res = await axios
    .get('/questions?page=1&size=1000', {
      headers: { 'ngrok-skip-browser-warning': '69420' },
    })
    .catch(() => console.log('Error!'));
  console.log('ㅇㅅㅇ', res.data.data);
  return res.data.data;
};
