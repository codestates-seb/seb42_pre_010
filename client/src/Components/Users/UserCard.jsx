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
      picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
        1,
        98
      )}.jpg`,
    },
  ],
};

const userimg = initialState.users[0].picture;

const UserCardContainer = styled.main`
  max-width: 1100px;
  height: 500px;
  width: calc(100% - 164px);
  border: 1px solid black;
`;

const UserCardInfoBlock = styled.div`
  border: 1px solid purple;
`;

const UserCardImg = styled.img.attrs(() => ({
  src: `${userimg}`,
}))``;

export const UserCard = () => {
  console.log(initialState);

  return (
    <UserCardContainer>
      <UserCardInfoBlock>
        <UserCardImg />
      </UserCardInfoBlock>
    </UserCardContainer>
  );
};

export default UserCard;
