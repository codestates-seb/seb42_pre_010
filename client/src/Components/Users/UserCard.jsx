import styled from 'styled-components';
import UserCardProfile from './UserCardProfile';

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

const userimg = initialState.users[1].picture;

const UserCardContainer = styled.main`
  max-width: 1100px;
  height: 500px;
  width: calc(100% - 164px);
  border: 1px solid black;
  position: relative;
  list-style: none;
`;

const UserCardInfoBlock = styled.div`
  border: 1px solid purple;
  display: flex;
  align-items: center;
`;

const UserCardImg = styled.img.attrs(() => ({
  src: `${userimg}`,
}))``;

const UserCardInfoContnet = styled.div`
  background-color: #86ddff76;
`;

const UserCardInfoList = styled.ul`
  border: 1px solid yellow;
  display: flex;
`;

const UserCardButtonWrap = styled.div`
  border: 1px solid blue;
  position: absolute;
  right: 0;
  top: 0;
`;

const UserCardNavSection = styled.div`
  border: 1px solid black;
  display: flex;
`;

const UserCardNavList = styled.li``;

const UserCardConentSection = styled.div`
  background-color: blanchedalmond;
  width: 100%;
  height: 100%;
`;

const usercardNav = ['Profile', 'Activity', 'Saves', 'Settings'];

export const UserCard = () => {
  console.log(initialState);

  return (
    <UserCardContainer>
      <UserCardInfoBlock>
        <UserCardImg />
        <UserCardInfoContnet>
          <h1>Youngk</h1>
          <UserCardInfoList>
            <li>Member for 6 days</li>
            <li>Last seen this week</li>
            <li>Visited 6 days, 6 consecutive</li>
          </UserCardInfoList>
          <UserCardInfoList>
            <li>트위터</li>
            <li>깃허브</li>
            <li>개인 링크</li>
            <li>위치</li>
          </UserCardInfoList>
        </UserCardInfoContnet>
      </UserCardInfoBlock>
      <UserCardButtonWrap>
        <button>Edit profile</button>
        <button>Network profile</button>
      </UserCardButtonWrap>
      <UserCardNavSection>
        {usercardNav.map((ele, idx) => {
          return <UserCardNavList key={idx}>{ele}</UserCardNavList>;
        })}
      </UserCardNavSection>
      {/*선택 된 Nav Meue에 따라 UserCardConentSection에 출력이 달라 짐*/}
      <UserCardConentSection>
        <UserCardProfile />
      </UserCardConentSection>
    </UserCardContainer>
  );
};

export default UserCard;
