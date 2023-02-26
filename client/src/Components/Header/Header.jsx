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

const REACT_APP_URL = 'http://localhost:3000';

export const Header = ({ logged, currUser }) => {
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
          <HeaderContent logged={logged} currUser={currUser} />
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

export const HeaderContent = ({ logged, currUser }) => {
  return (
    <>
      {logged ? (
        <LoggedHeaderContent currUser={currUser} />
      ) : (
        <PubHeaderContent />
      )}
    </>
  );
};

export const LoggedHeaderContent = ({ currUser }) => {
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
      <CommunityBlock>
        <FaStackExchange />
      </CommunityBlock>
    </LoggedHeaderContentWrap>
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
