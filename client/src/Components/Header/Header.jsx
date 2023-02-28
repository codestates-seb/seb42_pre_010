import { Link } from 'react-router-dom';
import {
  HeaderBlock,
  PubHeaderNavWrap,
  LoggedHeaderNavWrap,
  PubHeaderContentWrap,
  MypageWrap,
  MessageBlock,
  AchievmentBlock,
  HelpBlock,
  CommunityBlock,
  LoginBlock,
  SignupBlock,
  LoggedHeaderContentWrap,
  LogoBlock,
  picture,
} from './HeaderStyle';
import { FiSearch } from 'react-icons/fi';
import { ImDrawer2 } from 'react-icons/im';
import { RiTrophyFill } from 'react-icons/ri';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FaStackExchange } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';

const REACT_APP_URL = 'http://localhost:3000';

export const Header = ({ logged, currUser, setLogged }) => {
  return (
    <>
      <HeaderBlock>
        <nav>
          <Link to="/">
            <LogoBlock>
              <img
                src={REACT_APP_URL + '/images/logo-stackoverflow.png'}
                alt="logo"
              />
            </LogoBlock>
          </Link>
          <HeaderNav logged={logged} />
          <SearchBlock />
          <HeaderContent
            logged={logged}
            currUser={currUser}
            setLogged={setLogged}
          />
        </nav>
      </HeaderBlock>
    </>
  );
};

export const HeaderNav = (logged) => {
  return <>{logged ? <LoggedHeaderNav /> : <PubHeaderNav />}</>;
};

export const PubHeaderNav = () => {
  return (
    <PubHeaderNavWrap>
      <li>About</li>
      <li>Products</li>
      <li>
        <a href="https://github.com/codestates-seb/seb42_pre_010">For Teams</a>
      </li>
    </PubHeaderNavWrap>
  );
};

export const LoggedHeaderNav = () => {
  return (
    <LoggedHeaderNavWrap>
      <li>Products</li>
    </LoggedHeaderNavWrap>
  );
};

export const SearchBlock = () => {
  return (
    <form>
      <FiSearch />
      <input placeholder="Search..." />
    </form>
  );
};

export const HeaderContent = ({ logged, currUser, setLogged }) => {
  return (
    <>
      {logged ? (
        <LoggedHeaderContent
          currUser={currUser}
          setLogged={setLogged}
          logged={logged}
        />
      ) : (
        <PubHeaderContent />
      )}
    </>
  );
};

export const LoggedHeaderContent = ({ currUser, setLogged, logged }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(!modalOpen);
    console.log('modalOpen');
  };

  return (
    <LoggedHeaderContentWrap>
      <MypageWrap>
        <Link to={`/card/users/${currUser.data.userId}`}>
          <img src={picture} alt={'user-img'} />
        </Link>
        <span>{currUser.data.questionCount}</span>
      </MypageWrap>
      <MessageBlock>
        <ImDrawer2 />
      </MessageBlock>
      <AchievmentBlock>
        <RiTrophyFill />
      </AchievmentBlock>
      <HelpBlock>
        <BsQuestionCircleFill />
      </HelpBlock>
      <CommunityBlock onClick={showModal}>
        {modalOpen && (
          <ModalLogOut
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
            setLogged={setLogged}
            logged={logged}
          />
        )}
        <FaStackExchange />
      </CommunityBlock>
    </LoggedHeaderContentWrap>
  );
};

export const ModalWrap = styled.div`
  width: 300px;
  position: absolute;
  right: 0px;
  top: 50px;
  background-color: #fff;
`;

export const LogoutBtn = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  background-color: #fff;
  :hover {
    background-color: hsl(210, 8%, 90%);
  }
`;

export const ModalLogOut = ({ setModalOpen, modalOpen, setLogged, logged }) => {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(!modalOpen);
  };
  // 로그아웃
  const logOut = () => {
    localStorage.removeItem('logged');
    localStorage.removeItem('userData');
    setLogged(false);
    console.log(logged);
  };

  return (
    <ModalWrap onClick={closeModal}>
      <LogoutBtn onClick={logOut}>Log out</LogoutBtn>
    </ModalWrap>
  );
};

export const PubHeaderContent = () => {
  return (
    <PubHeaderContentWrap>
      <Link to="/users/login">
        <LoginBlock>Login</LoginBlock>
      </Link>
      <Link to="/users/signup">
        <SignupBlock>Sign up</SignupBlock>
      </Link>
    </PubHeaderContentWrap>
  );
};

export default Header;
