import styled from 'styled-components';
const UserCardActivityWrap = styled.div`
  display: flex;
`;

// 왼쪽에 Nav 영역
const ActivityNavSection = styled.div`
  margin: 16px;
`;

const UserCardActivityNavList = styled.li`
  color: hsl(210, 8%, 35%);
  text-decoration: none;
  border: none;
  padding: 10px 25px 10px 15px;
  font-size: 13px;
  :hover {
    color: black;
    border-radius: 1000px;
    background-color: hsl(210, 8%, 90%);
  }
`;

const UserCardActivityNav = [
  'Summary',
  'Answers',
  'Questions',
  'Tags',
  'Articles',
  'Badges',
  'Bounties',
  'Reputation',
  'All actions',
];

// 우측에 콘텐츠가 출력되는 영역
const ActivityContentSection = styled.div``;

const UserCardActivity = () => {
  return (
    <UserCardActivityWrap>
      <ActivityNavSection>
        {UserCardActivityNav.map((ele, idx) => {
          return (
            <UserCardActivityNavList key={idx}>{ele}</UserCardActivityNavList>
          );
        })}
      </ActivityNavSection>
      <ActivityContentSection></ActivityContentSection>
    </UserCardActivityWrap>
  );
};

export default UserCardActivity;
