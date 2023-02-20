import styled from 'styled-components';
import UserCardProfile from './UserCardProfile';
import { MdCake, MdLocationOn } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';
import { BiCalendar } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';

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
  position: relative;
  list-style: none;
  svg {
    margin-right: 5px;
  }
`;

const UserCardInfoBlock = styled.div`
  display: flex;
  align-items: center;
`;

const UserCardImg = styled.img.attrs(() => ({
  src: `${userimg}`,
}))`
  width: 130px;
  height: 130px;
  margin: 16px;
  border-radius: 5px;
`;

const UserCardInfoContnet = styled.div`
  h1 {
    font-size: 2.6rem;
    margin-bottom: 12px;
  }
`;

const UserCardInfoListWrap = styled.ul`
  display: flex;
  color: hsl(210, 8%, 45%);
  margin: 8px;
  font-size: 20px;
`;

const UserCardInfoList = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const UserCardButtonWrap = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  button {
    height: 37px;
    text-decoration: none;
    margin: 0 3px;
    background-color: white;
    color: hsl(210, 8%, 45%);
    border: 1px solid;
    cursor: pointer;
    font-size: 0.8rem;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    padding: 15px;
    &:hover {
      background-color: #f8f9f9;
    }
  }
`;

const UserCardNavSection = styled.div`
  display: flex;
`;

const UserCardNavList = styled.li``;

const UserCardConentSection = styled.div`
  width: 100%;
  height: 100%;
`;

const usercardNav = ['Profile', 'Activity', 'Saves', 'Settings'];

export const UserCard = () => {
  //console.log(initialState);

  return (
    <UserCardContainer>
      <UserCardInfoBlock>
        <UserCardImg />
        <UserCardInfoContnet>
          <h1>Youngk</h1>
          <UserCardInfoListWrap>
            <UserCardInfoList>
              <MdCake />
              <li>Member for 6 days</li>
            </UserCardInfoList>
            <UserCardInfoList>
              <FiClock />
              <li>Last seen this week</li>
            </UserCardInfoList>
            <UserCardInfoList>
              <BiCalendar />
              <li>Visited 6 days, 6 consecutive</li>
            </UserCardInfoList>
          </UserCardInfoListWrap>
          <UserCardInfoListWrap>
            <BsTwitter />
            <AiFillGithub />
            <MdLocationOn />
          </UserCardInfoListWrap>
        </UserCardInfoContnet>
      </UserCardInfoBlock>
      <UserCardButtonWrap>
        <button>
          <FaPen />
          Edit profile
        </button>
        <button>Profiles</button>
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
