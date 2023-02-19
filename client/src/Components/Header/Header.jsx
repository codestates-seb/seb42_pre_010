import { useState } from 'react';

import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { ImDrawer2 } from 'react-icons/im';
import { RiTrophyFill } from 'react-icons/ri';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FaStackExchange } from 'react-icons/fa';

export const HeaderBlock = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid hsl(27, 90%, 55%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
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
`;

//! About, Products, For Teams || Products
export const HeaderNav = (logged) => {
  // console.log(logged.logged);

  return <>{logged.logged ? <PubHeaderNav /> : <LoggedHeaderNav />}</>;
};

// About, Products, For Teams
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

export const PubHeaderNav = () => {
  return (
    <PubHeaderNavWrap>
      <li>About</li>
      <li>Products</li>
      <li>For Teams</li>
    </PubHeaderNavWrap>
  );
};

// Products
export const LoggedHeaderNav = () => {
  return (
    <LoggedHeaderNavWrap>
      <li>Products</li>
    </LoggedHeaderNavWrap>
  );
};

// 검색 Input 창
export const SearchBlock = () => {
  return (
    <form>
      <FiSearch />
      <input placeholder="Search..." />
    </form>
  );
};

//! 로그인, 회원 가입 || 마이페이지
export const HeaderContent = (logged) => {
  //console.log(logged.logged);

  return <>{logged.logged ? <LoggedHeaderContent /> : <PubHeaderContent />}</>;
};

export const PubHeaderContentWrap = styled.div`
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

// 마이페이지
export const MypageWrap = styled.li``;

export const MessageBlock = styled.li``;

export const AchievmentBlock = styled.li``;

export const HelpBlock = styled.li``;

export const CommunityBlock = styled.li``;

export const PubHeaderContent = () => {
  return (
    <PubHeaderContentWrap>
      <MypageWrap></MypageWrap>
      <MessageBlock>
        <ImDrawer2 />
      </MessageBlock>
      <AchievmentBlock>
        <RiTrophyFill />
      </AchievmentBlock>
      <HelpBlock>
        <BsQuestionCircleFill />
      </HelpBlock>
      <CommunityBlock>
        <FaStackExchange />
      </CommunityBlock>
    </PubHeaderContentWrap>
  );
};

// 로그인, 회원 가입
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
    border-radius: 3px;
    margin: 3px;
    padding: 9.5px 12px;
    font-size: 0.8em;
  }
`;

export const LoggedHeaderContent = () => {
  return (
    <LoggedHeaderContentWrap>
      <LoginBlock>Login</LoginBlock>
      <SignupBlock>Signup</SignupBlock>
    </LoggedHeaderContentWrap>
  );
};

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

export const Header = () => {
  //로그인 여부를 확인하기 위한 상태가 필요
  const [logged, setLogged] = useState(false);

  // const modeHandler = () => {
  //   setLogged(!logged);
  // };

  return (
    <>
      <HeaderBlock>
        <nav>
          <LogoBlock>
            <img src="images/logo-stackoverflow.png" alt="logo" />
          </LogoBlock>
          <HeaderNav logged={logged} setLogged={setLogged} />
          <SearchBlock />
          <HeaderContent logged={logged} />
        </nav>
      </HeaderBlock>
      {/* <button onClick={modeHandler}>❤️</button> */}
    </>
  );
};

export default Header;
