import axios from 'axios';

export const getAllUsers = async () => {
  const res = await axios.get('/users?page=1&size=100');
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
