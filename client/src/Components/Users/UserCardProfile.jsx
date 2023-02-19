import styled from 'styled-components';

const UserCardProfileWrap = styled.div`
  display: flex;
`;

const ProfileContentRightSection = styled.div`
  border: 1px solid black;
  background-color: pink;
`;

export const ProfileStatsSection = () => {
  const ProfileStatsWrap = styled.div`
    width: 215px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 60px);
    background-color: brown;
    div {
      border: 1px solid black;
    }
  `;
  return (
    <>
      <h2>Stats</h2>
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
  const ProfileCommunitiesWrap = styled.div`
    width: 215px;
    background-color: #36d485;
  `;

  const ProfileCommunitiesList = styled.ul``;
  return (
    <>
      <ProfileCommunitiesWrap>
        <h2>Communities</h2>
        <ProfileCommunitiesList>
          <li>Stack Overflow</li>
        </ProfileCommunitiesList>
      </ProfileCommunitiesWrap>
    </>
  );
};

const ProfileContentLeftSection = styled.div`
  border: 1px solid black;
  width: 100%;
  background-color: blue;
`;

export const ProfileAboutSection = () => {
  const ProfileAboutContent = styled.div``;

  return (
    <>
      <h2>About</h2>
      <ProfileAboutContent>
        <p>
          python enthusiast
          <br /> If you would like to thank me, you can buy me a coffee ❤️
        </p>
      </ProfileAboutContent>
    </>
  );
};

export const ProfileBadgesSection = () => {
  const ProfileBadgesContent = styled.div``;

  return (
    <>
      <h2>Badges</h2>
      <ProfileBadgesContent>
        <h3>508</h3>
      </ProfileBadgesContent>
      <ProfileBadgesContent>
        <h3>508</h3>
      </ProfileBadgesContent>
      <ProfileBadgesContent>
        <h3>508</h3>
      </ProfileBadgesContent>
    </>
  );
};

const UserCardProfile = () => {
  return (
    <UserCardProfileWrap>
      <ProfileContentRightSection>
        <ProfileStatsSection />
        <ProfileCommunitiesSection />
      </ProfileContentRightSection>
      <ProfileContentLeftSection>
        <ProfileAboutSection />
        <ProfileBadgesSection />
      </ProfileContentLeftSection>
    </UserCardProfileWrap>
  );
};

export default UserCardProfile;
