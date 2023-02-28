import UserCardProfile from '../../Components/Users/UserCardProfile';
import USerActivitiy from '../../Components/Users/UserCardActivity';
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
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const usercardNav = ['Profile', 'Activity', 'Saves', 'Settings'];

export const UserDetail = ({ userList }) => {
  const { userId } = useParams();
  const [found, setFound] = useState([]);

  useEffect(() => {
    const found = userList?.filter((el) => String(el.userId) === userId)[0];
    setFound(found);
  });

  // usercardNav 선택 된 idx 번호
  const [selected, setSelected] = useState(0);

  const changeSelected = (idx) => {
    setSelected(idx);
  };

  // 시간 계산 알고리즘
  function ElapsedTime(date) {
    const start = new Date(date);
    const end = new Date();

    const diff = (end - start) / 1000;

    const times = [
      { name: 'years', milliSeconds: 60 * 60 * 24 * 365 },
      { name: 'months', milliSeconds: 60 * 60 * 24 * 30 },
      { name: 'mins', milliSeconds: 60 * 60 * 24 },
      { name: 'hours', milliSeconds: 60 * 60 },
      { name: 'mins', milliSeconds: 60 },
    ];

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);
      if (betweenTime > 0) {
        return `${betweenTime} ${value.name} ago`;
      }
    }
    return 'Now';
  }

  return (
    <UserCardContainer>
      <UserCardInfoBlock>
        <UserCardImg
          src={`https://randomuser.me/api/portraits/${
            Math.floor(Math.random(1 * 1000) * 10) % 2 ? 'men' : 'women'
          }/${Math.floor(Math.random(1 * 1000) * 10)}.jpg`}
          alt="user-name"
        />
        <UserCardInfoContnet>
          <h1>{found?.username}</h1>
          <UserCardInfoListWrap>
            <UserCardInfoList>
              <MdCake />
              <li>
                <time dateTime={new Date()}>
                  Member for {ElapsedTime(found.createdAt)}
                </time>
              </li>
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
        {usercardNav?.map((ele, idx) => {
          return (
            <UserCardNavList
              key={idx}
              value={idx}
              onClick={(e) => changeSelected(e.target.value)}
            >
              {ele}
            </UserCardNavList>
          );
        })}
      </UserCardNavSection>
      <UserCardConentSection>
        {selected === 0 ? <UserCardProfile found={found} /> : <USerActivitiy />}
      </UserCardConentSection>
    </UserCardContainer>
  );
};

export default UserDetail;
