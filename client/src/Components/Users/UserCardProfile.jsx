import styled from 'styled-components';
import { FaAward } from 'react-icons/fa';

const UserCardProfileWrap = styled.div`
  display: flex;
`;

const UserCardProfilTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 15px;
`;

// Content Wrap
// : 콘텐츠를 감싸는 회색 div, 재사용 가능
const ProfileConentWrap = styled.div`
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 5px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const ProfileContentLeftSection = styled.div`
  margin: 0 12px 0 24px;
`;

export const ProfileStatsSection = () => {
  const ProfileStatsWrap = styled.div`
    width: 215px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 60px);
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 5px;
    color: hsl(210, 8%, 35%);
    padding: 8px;
    font-size: 14px;
    margin-bottom: 24px;
    div {
      margin: 8px;
    }
    p {
      font-size: 18px;
      color: #000;
      padding: 5px 0;
    }
  `;
  return (
    <>
      <UserCardProfilTitle>Stats</UserCardProfilTitle>
      <ProfileStatsWrap>
        <div>
          <p>1</p>reputation
        </div>
        <div>
          <p>1</p>reached
        </div>
        <div>
          <p>1</p>answers
        </div>
        <div>
          <p>1</p>questions
        </div>
      </ProfileStatsWrap>
    </>
  );
};

export const ProfileCommunitiesSection = () => {
  const ProfileCommunitiesWrap = styled.div``;

  const ProfileCommunitiesList = styled.ul`
    li {
      font-size: 14px;
    }
  `;
  return (
    <>
      <ProfileCommunitiesWrap>
        <UserCardProfilTitle>Communities</UserCardProfilTitle>
        <ProfileConentWrap>
          <ProfileCommunitiesList>
            <li>Stack Overflow</li>
          </ProfileCommunitiesList>
        </ProfileConentWrap>
      </ProfileCommunitiesWrap>
    </>
  );
};

const ProfileContentRightSection = styled.div`
  width: 100%;
  margin: 0 24px;
`;

export const ProfileAboutSection = () => {
  const ProfileAboutContent = styled.div`
    margin-bottom: 48px;
    p {
      margin-bottom: 24px;
      color: hsl(210, 8%, 25%);
    }
  `;

  return (
    <>
      <UserCardProfilTitle>About</UserCardProfilTitle>
      <ProfileAboutContent>
        <p>
          #enthusiast
          <br />
          #beginner ❤️
        </p>
      </ProfileAboutContent>
    </>
  );
};

export const ProfileBadgesSection = () => {
  const ProfileBadgesWrap = styled.div`
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      background-color: hsl(210, 8%, 95%);
      color: hsl(210, 8%, 45%);
      border: 1px solid;
      font-size: 0.8rem;
      border-radius: 3px;
      padding: 5px 7px;
      &:hover {
        background-color: #f8f9f9;
      }
    }
    span {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      font-size: 12px;
    }
  `;
  const ProfileBadgesContent = styled.div`
    display: flex;
    margin-bottom: 12px;
    svg {
      font-size: 48px;
      margin-right: 12px;
    }
    h3 {
      font-size: 21px;
    }
  `;

  const ProfileBadgesContentWrap = styled.div`
    width: 245px;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 5px;
    margin-right: 24px;
    padding: 12px;
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <UserCardProfilTitle>Badges</UserCardProfilTitle>
      <ProfileBadgesWrap>
        <ProfileBadgesContentWrap>
          <ProfileBadgesContent>
            <FaAward />
            <div>
              <h3>508</h3>
              <p>gold badges</p>
            </div>
          </ProfileBadgesContent>
          <span>
            <a href="/tags">gitclear</a>
            Feb 2, 2015
          </span>
          <span>
            <a href="/tags">gitclear</a>
            Feb 2, 2015
          </span>
        </ProfileBadgesContentWrap>
        <ProfileBadgesContentWrap>
          <ProfileBadgesContent>
            <FaAward />
            <div>
              <h3>508</h3>
              <p>gold badges</p>
            </div>
          </ProfileBadgesContent>
          <span>
            <a href="/tags">gitclear</a>
            Feb 2, 2015
          </span>
          <span>
            <a href="/tags">gitclear</a>
            Feb 2, 2015
          </span>
        </ProfileBadgesContentWrap>
        <ProfileBadgesContentWrap>
          <ProfileBadgesContent>
            <FaAward />
            <div>
              <h3>508</h3>
              <p>gold badges</p>
            </div>
          </ProfileBadgesContent>
          <span>
            <a href="/tags">gitclear</a>
            Feb 2, 2015
          </span>
          <span>
            <a href="/tags">gitclear</a>
            Feb 2, 2015
          </span>
        </ProfileBadgesContentWrap>
      </ProfileBadgesWrap>
    </>
  );
};

const UserCardProfile = () => {
  return (
    <UserCardProfileWrap>
      <ProfileContentLeftSection>
        <ProfileStatsSection />
        <ProfileCommunitiesSection />
      </ProfileContentLeftSection>
      <ProfileContentRightSection>
        <ProfileAboutSection />
        <ProfileBadgesSection />
      </ProfileContentRightSection>
    </UserCardProfileWrap>
  );
};

export default UserCardProfile;
