import {
  UserCardActivityWrap,
  ActivityNavSection,
  UserCardActivityNavList,
  ActivityContentSection,
} from './UserCardStyle';

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
