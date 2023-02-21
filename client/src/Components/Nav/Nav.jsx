import styled from 'styled-components';
import { BiWorld } from 'react-icons/bi';

const NavContainer = styled.div`
  width: 164px;
  height: 100vh;
  padding-top: 10px;
  padding-left: 150px;
  border-right: 1px solid #d6d9dc;
  font-size: 13px;
`;

const NavBlock = styled.div`
  width: 100%;
  height: 382px;
  color: rgb(81, 81, 81);

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0; // ul 기본 여백 초기화
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 9px 4px 9px 8px;

    &:hover {
      color: #000;
    }
  }

  ul ul li:not(:first-of-type) {
    padding-left: 26px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 15px 4px 4px 8px;
  }

  .icon {
    margin-right: 4px;
  }

  .clickMemu {
    font-weight: bold;
    color: #000;
    background-color: #f1f2f3;
    border-right: 3px solid #f38225;
  }
`;

const Nav = () => {
  // let loaction = window.location.pathname;
  // if (
  //   loaction === '/' ||
  //   loaction === '/questions' ||
  //   loaction === '/tags' ||
  //   loaction === '/users'
  // )
  //   return null;

  return (
    <NavContainer>
      <NavBlock>
        <ul>
          <li
            className={
              window.location.pathname === '/' ? 'home clickMemu' : 'home'
            }
          >
            <a href="/">Home</a>
          </li>
          <p>PUBLIC</p>
          <ul>
            <li
              className={
                window.location.pathname === '/questions' ? 'clickMemu' : 'null'
              }
            >
              <BiWorld className="icon" size={16} />
              <a href="/questions">Questions</a>
            </li>
            <li
              className={
                window.location.pathname === '/tags' ? 'clickMemu' : 'null'
              }
            >
              <a href="/tags">Tags</a>
            </li>
            <li
              className={
                window.location.pathname === '/users' ? 'clickMemu' : 'null'
              }
            >
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="https://stackoverflow.com/jobs/companies">Companies</a>
            </li>
          </ul>
        </ul>
      </NavBlock>
    </NavContainer>
  );
};

export default Nav;
