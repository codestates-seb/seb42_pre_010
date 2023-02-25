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
  picture,
} from '../../Components/Users/UserCardStyle';
import { useParams } from 'react-router-dom';

const usercardNav = ['Profile', 'Activity', 'Saves', 'Settings'];

export const UserDetail = ({ userList }) => {
  const { userId } = useParams();

  const found = userList.filter((el) => String(el.userId) === userId)[0];
  return (
    <UserCardContainer>
      <UserCardInfoBlock>
        <UserCardImg src={picture} />
        <UserCardInfoContnet>
          <h1>{found.username}</h1>
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
