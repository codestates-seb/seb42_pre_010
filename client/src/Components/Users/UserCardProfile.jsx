import styled from 'styled-components';

const UserCardProfileWrap = styled.div`
  display: flex;
`;

const ProfileContentRightSection = styled.div`
  border: 1px solid black;
  background-color: pink;
  width: 100%;
  height: 500px;
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
        <div>box1</div>
        <div>box2</div>
        <div>box3</div>
        <div>box4</div>
      </ProfileStatsWrap>
    </>
  );
};

const ProfileContentLeftSection = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 500px;
  background-color: blue;
`;

const UserCardProfile = () => {
  return (
    <UserCardProfileWrap>
      <ProfileContentRightSection>
        <ProfileStatsSection />
      </ProfileContentRightSection>
      <ProfileContentLeftSection></ProfileContentLeftSection>
    </UserCardProfileWrap>
  );
};

export default UserCardProfile;
