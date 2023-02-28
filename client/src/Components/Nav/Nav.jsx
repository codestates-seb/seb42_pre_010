import styled from 'styled-components';
import { BiWorld } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.div`
  width: 164px;
  padding-top: 10px;
  padding-left: 80px;
  border-right: 1px solid #d6d9dc;
  font-size: 13px;
`;

const NavBlock = styled.div`
  width: 100%;
  color: rgb(81, 81, 81);
  margin-top: 20px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
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
  const location = useLocation();

  return (
    <NavContainer>
      <NavBlock>
        <ul>
          <li className={location.pathname === '/' ? 'clickMemu home' : 'home'}>
            <Link to="/">Home</Link>
          </li>
          <p>PUBLIC</p>
          <ul>
            <li
              className={
                location.pathname === '/allquestion' ? 'clickMemu' : 'null'
              }
            >
              <BiWorld className="icon" size={16} />
              <Link to="/allquestion">Questions</Link>
            </li>
            <li
              className={location.pathname === '/tags' ? 'clickMemu' : 'null'}
            >
              <Link to="/tags">Tags</Link>
            </li>
            <li
              className={
                location.pathname === '/allusers' ? 'clickMemu' : 'null'
              }
            >
              <Link to="/allusers">Users</Link>
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
