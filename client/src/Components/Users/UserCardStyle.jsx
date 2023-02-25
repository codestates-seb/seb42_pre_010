import styled from 'styled-components';

//! UserCard

export const UserCardContainer = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  list-style: none;
  padding: 12px;
  svg {
    margin-right: 5px;
  }
`;

export const UserCardInfoBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const UserCardImg = styled.img`
  width: 130px;
  height: 130px;
  margin: 16px;
  border-radius: 5px;
`;

export const UserCardInfoContnet = styled.div`
  h1 {
    font-size: 2.6rem;
    margin-bottom: 12px;
  }
`;

export const UserCardInfoListWrap = styled.ul`
  display: flex;
  color: hsl(210, 8%, 45%);
  margin: 8px;
  font-size: 20px;
`;

export const UserCardInfoList = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 10px;
    font-size: 14px;
  }
`;

export const UserCardButtonWrap = styled.div`
  display: flex;
  position: absolute;
  right: 60px;
  top: 0;
  padding-top: 24px;
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

export const UserCardNavSection = styled.div`
  display: flex;
  margin: 0 16px;
`;

export const UserCardNavList = styled.li`
  color: hsl(210, 8%, 35%);
  text-decoration: none;
  border: none;
  padding: 11px 15px;
  font-size: 13px;
  margin-bottom: 16px;
  :hover {
    color: black;
    border-radius: 1000px;
    background-color: hsl(210, 8%, 90%);
  }
`;

export const UserCardConentSection = styled.div`
  width: 100%;
  height: 100%;
`;

//! UserCardProfile

export const UserCardProfileWrap = styled.div`
  display: flex;
`;

export const UserCardProfilTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 15px;
`;

// Content Wrap
// : 콘텐츠를 감싸는 회색 div, 재사용 가능
export const ProfileConentWrap = styled.div`
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 5px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const ProfileContentLeftSection = styled.div`
  margin: 0 12px 0 24px;
`;

export const ProfileStatsWrap = styled.div`
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

export const ProfileCommunitiesWrap = styled.div``;

export const ProfileCommunitiesList = styled.ul`
  li {
    font-size: 14px;
  }
`;

export const ProfileContentRightSection = styled.div`
  width: 100%;
  margin: 0 24px;
`;

export const ProfileAboutContent = styled.div`
  margin-bottom: 48px;
  p {
    margin-bottom: 24px;
    color: hsl(210, 8%, 25%);
  }
`;

export const ProfileBadgesWrap = styled.div`
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

export const ProfileBadgesContent = styled.div`
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

export const ProfileBadgesContentWrap = styled.div`
  width: 245px;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 5px;
  margin-right: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

//! UserCardActivity

export const UserCardActivityWrap = styled.div`
  width: 1100px !important ;
  display: flex;
  width: auto;
`;

// 왼쪽에 Nav 영역
export const ActivityNavSection = styled.div`
  margin: 16px;
`;

export const UserCardActivityNavList = styled.li`
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

// 우측에 콘텐츠가 출력되는 영역
export const ActivityContentSection = styled.div`
  width: 100%;
`;

export const picture =
  'https://velog.velcdn.com/images/youa7878/post/7bffe548-e47a-4854-8cef-7af794394f54/image.png';
