import axios from 'axios';

export const getAllUsers = async () => {
  const res = await axios.get(
    'http://ec2-3-36-95-130.ap-northeast-2.compute.amazonaws.com:8080/users?page=1&size=100',
    { headers: { 'Content-Security-Policy': 'upgrade-insecure-requests' } }
  );
  return res.data.data;
};

// export const getAllUsers = async () => {
//   const res = await axios
//     .get('/users?page=1&size=100', {
//       headers: { 'ngrok-skip-browser-warning': '69420' },
//     })
//     .catch(() => console.log('Error!'));
//   return res.data.data;
// };
