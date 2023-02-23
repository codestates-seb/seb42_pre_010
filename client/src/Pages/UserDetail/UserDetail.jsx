import UserCardProfile from '../../Components/Users/UserCardProfile';
import { MdCake, MdLocationOn } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';
import { BiCalendar } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import {
  UserCardContainer,
  UserCardInfoBlock,
  UserCardImg,
  UserCardInfoContnet,
  UserCardInfoListWrap,
  UserCardInfoList,
  UserCardButtonWrap,
  UserCardNavSection,
  UserCardNavList,
  UserCardConentSection,
} from '../../Components/Users/UserCardStyle';

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
      userName: 'Young K',
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

const usercardNav = ['Profile', 'Activity', 'Saves', 'Settings'];

export const UserDetail = () => {
  return (
    <UserCardContainer>
      <UserCardInfoBlock>
        <UserCardImg src={initialState.users[1].picture} />
        <UserCardInfoContnet>
          <h1>{initialState.users[1].userName}</h1>
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

export default UserDetail;
