import axios from 'axios';

export const getAllQuestion = async () => {
  const res = await axios
    .get(
      'http://ec2-3-36-95-130.ap-northeast-2.compute.amazonaws.com:8080/questions?page=1&size=1000',
      { headers: { 'Content-Security-Policy': 'upgrade-insecure-requests' } }
    )
    .catch(() => console.log('Error!'));
  return res.data.data;
};

// export const getAllQuestion = async () => {
//   const res = await axios
//     .get('/questions?page=1&size=1000', {
//       headers: { 'ngrok-skip-browser-warning': '69420' },
//     })
//     .catch(() => console.log('Error!'));
//   return res.data.data;
// };
