const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const userList = [
  {
    id: 0,
    userName: 'Jae',
    createdAt: '2023.02.16 14:00:00',
    questionCount: 23,
    answerCount: 45,
    picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
      1,
      98
    )}.jpg`,
  },
  {
    id: 1,
    userName: 'wonpil',
    createdAt: '2023.02.16 14:00:00',
    questionCount: 23,
    answerCount: 45,
    picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
      1,
      98
    )}.jpg`,
  },
  {
    id: 2,
    userName: 'Young K',
    createdAt: '2023.02.16 14:00:00',
    questionCount: 3,
    answerCount: 4,
    picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
      1,
      98
    )}.jpg`,
  },
  {
    id: 3,
    userName: 'Do Woon',
    createdAt: '2023.02.16 14:00:00',
    questionCount: 3,
    answerCount: 4,
    picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
      1,
      98
    )}.jpg`,
  },
  {
    id: 4,
    userName: 'Sung Jin',
    createdAt: '2023.02.16 14:00:00',
    questionCount: 36,
    answerCount: 4,
    picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
      1,
      98
    )}.jpg`,
  },
  {
    id: 6,
    userName: 'Sung Jin',
    createdAt: '2023.02.16 14:00:00',
    questionCount: 36,
    answerCount: 4,
    picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
      1,
      98
    )}.jpg`,
  },
];

export default userList;
