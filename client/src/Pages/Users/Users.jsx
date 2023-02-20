import styled from 'styled-components';
// import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { initialState } from '../../Components/Users/UserCard';

const UsersContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 24px;
`;

const UsersTitle = styled.h1`
  font-size: 27px;
  margin-bottom: 24px;
`;

const SearchBox = styled.div`
  display: flex;
  margin: 40px 0px 20px;
  border: 1px solid #c5c5c5;
  width: 180px;
  border-radius: 3px;
  padding: 8px;

  input {
    width: 150px;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;

const Users = () => {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState(initialState.users);

  const filterUser = () => {
    const userData = initialState.users.filter((ele) => {
      ele.userName === userName;
    });
    setUserList(userData);
  };

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
    filterUser();
  };

  return (
    <UsersContainer>
      <UsersTitle>Users</UsersTitle>
      <SearchBox>
        <GoSearch />
        <form>
          <input
            placeholder="Filter by name"
            value={userName}
            onChange={handleUserName}
          ></input>
        </form>
      </SearchBox>

      <div>
        {userList.map((ele, idx) => {
          return (
            <div key={idx}>
              <img src={ele.picture} alt="user-name" />
              <span>{ele.userName}</span>
            </div>
          );
        })}
      </div>
    </UsersContainer>
  );
};

export default Users;
