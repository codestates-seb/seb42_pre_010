import { useState } from 'react';

import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const HeaderBlock = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    border: 1px solid black;
    width: 98rem;
    max-width: 1264px;
    margin: 0 auto;
    display: flex;
    align-items: center;
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
  li {
    list-style: none;
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
    <>
      <h3>Products</h3>
    </>
  );
};

// 검색 Input 창
export const SearchBlock = () => {
  return (
    <>
      <FiSearch />
      <form>
        <input placeholder="Search..." />
      </form>
    </>
  );
};

//! 로그인, 회원 가입 || 마이페이지
export const HeaderContent = (logged) => {
  //console.log(logged.logged);

  return <>{logged.logged ? <LoggedHeaderContent /> : <PubHeaderContent />}</>;
};

export const PubHeaderContentWrap = styled.div`
  display: flex;
  li {
    list-style: none;
  }
`;

// 로그인, 회원 가입
export const PubHeaderContent = () => {
  return (
    <PubHeaderContentWrap>
      <li>Login</li>
      <li>Signup</li>
    </PubHeaderContentWrap>
  );
};

// 마이페이지
export const LoggedHeaderContent = () => {
  return (
    <>
      <h3>Mypage</h3>
    </>
  );
};

export const LogoBlock = styled.div`
  img {
    width: 150px;
    height: 30px;
  }
`;

export const Header = () => {
  //로그인 여부를 확인하기 위한 상태가 필요
  const [logged, setLogged] = useState(false);

  const modeHandler = () => {
    //상태 임의로 바꿔주는 것까지 확인
    setLogged(!logged);
  };

  return (
    <>
      <HeaderBlock>
        <nav>
          <LogoBlock>
            <img src="images/logo-stackoverflow.png" alt="logo" />
          </LogoBlock>
          <HeaderNav logged={logged} />
          <SearchBlock />
          <HeaderContent logged={logged} />
        </nav>
      </HeaderBlock>
      <button onClick={modeHandler}>❤️</button>
    </>
  );
};
