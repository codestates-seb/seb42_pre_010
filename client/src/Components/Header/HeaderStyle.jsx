import styled from 'styled-components';

export const HeaderBlock = styled.div`
  width: 100%;
  height: 50px;
  position: inherit; // 우선은 스티키 사용하지 않음
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid hsl(27, 90%, 55%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background-color: #ffffff;
  nav {
    width: 98rem;
    height: 100%;
    max-width: 1264px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 7px 9px;
    min-width: 184px;
    flex-grow: 1;
    margin: 0 8px;
    background-color: white;
  }
  input {
    padding-left: 1rem;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 80%;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

export const PubHeaderNavWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 226px;
  margin: 0 10px;
  li {
    color: hsl(210, 8%, 35%);
    text-decoration: none;
    border: none;
    padding: 8.5px 12px;
    margin: 0px;
    font-size: 13px;
    :hover {
      color: black;
      border-radius: 1000px;
      background-color: hsl(210, 8%, 90%);
    }
  }
  a {
    color: hsl(210, 8%, 35%);
    :hover {
      color: black;
    }
  }
`;

export const LoggedHeaderNavWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
  li {
    color: hsl(210, 8%, 35%);
    text-decoration: none;
    border: none;
    padding: 8.5px 12px;
    margin: 0px;
    font-size: 13px;
    :hover {
      color: black;
      border-radius: 1000px;
      background-color: hsl(210, 8%, 90%);
    }
  }
`;

export const PubHeaderContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  li {
    border-radius: 3px;
    margin: 3px;
    padding: 9.5px 12px;
    font-size: 0.8em;
  }
`;

export const MypageWrap = styled.li`
  display: flex;
  align-content: center;
  align-items: center;
  img {
    width: 20px;
    margin-right: 15px;
  }
  span {
    font-size: 12px;
    color: hsl(210, 8%, 45%);
    font-weight: 600;
  }
`;

export const MessageBlock = styled.li``;

export const AchievmentBlock = styled.li``;

export const HelpBlock = styled.li``;

export const CommunityBlock = styled.li``;

export const LoginBlock = styled.li`
  color: hsl(205, 47%, 42%);
  border: 1px solid hsl(205, 41%, 63%);
  background-color: hsl(205, 46%, 92%);
  :hover {
    background-color: hsl(205, 41%, 63%);
  }
  .logtxt {
    color: hsl(205, 47%, 42%);
  }
`;

export const SignupBlock = styled.li`
  color: hsl(205, 46%, 92%);
  border: 1px solid hsl(205, 41%, 63%);
  background-color: hsl(206, 100%, 52%);
  :hover {
    background-color: hsl(206, 100%, 40%);
  }
  .signtxt {
    color: white;
  }
`;

export const LoggedHeaderContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  li {
    padding: 15px;
    :hover {
      background-color: hsl(210, 8%, 90%);
      color: #191919;
    }
  }
  svg {
    font-size: 20px;
    color: hsl(210, 8%, 35%);
    :hover {
      color: #191919;
    }
  }
`;

export const LogoBlock = styled.div`
  padding: 10px 13px;
  img {
    width: 150px;
    height: 30px;
  }
  :hover {
    background-color: hsl(210, 8%, 90%);
  }
`;
