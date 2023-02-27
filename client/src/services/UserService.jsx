import axios from 'axios';

/*
! aws 서버 배포 후 사용할 코드입니다... 지우지 말아주세요...
export const getAllUsers = async () => {
  const res = await axios.get('/users?page=1&size=100');
  console.log('유저...', res);
  return res.data.data;
};
*/

export const getAllUsers = async () => {
  const res = await axios
    .get('/users?page=1&size=100', {
      headers: { 'ngrok-skip-browser-warning': '69420' },
    })
    .catch(() => console.log('Error!'));
  return res.data.data;
};
