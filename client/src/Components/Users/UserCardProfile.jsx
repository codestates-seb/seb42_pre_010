import {
  UserCardProfileWrap,
  UserCardProfilTitle,
  ProfileConentWrap,
  ProfileContentLeftSection,
  ProfileStatsWrap,
  ProfileCommunitiesWrap,
  ProfileCommunitiesList,
  ProfileContentRightSection,
  ProfileAboutContent,
  ProfileBadgesWrap,
  ProfileBadgesContent,
  ProfileBadgesContentWrap,
} from './UserCardStyle';
import { FaAward } from 'react-icons/fa';

export const ProfileCommunitiesSection = () => {
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

export const ProfileAboutSection = () => {
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

export const ProfileStatsSection = () => {
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

export default UserCardProfile;
