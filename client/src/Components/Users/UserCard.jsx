import styled from 'styled-components';

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

// 회원 정보 조회 시의 더비 데이터
export const initialState = {
  users: [
    {
      id: 1,
      userName: 'wonpil',
      createdAt: '2023.02.16 14:00:00',
      questionCount: 0,
      answerCount: 0,
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
    },
    {
      id: 2,
      userName: 'younghyun',
      createdAt: '2023.02.16 14:00:00',
      questionCount: 3,
      answerCount: 4,
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
    },
  ],
};

const UserCardContainer = styled.main``;

export const UserCard = () => {
  console.log(initialState);
  return <UserCardContainer></UserCardContainer>;
};

export default UserCard;
