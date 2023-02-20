// import styled from 'styled-components';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { initialState } from '../Components/Users/UserCard';

const Users = () => {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState(initialState.users);

  const filterUser = () => {
    const userData = initialState.filter((ele) => {
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
    <div>
      <h1>Users</h1>
      <form>
        <GoSearch />
        <input
          placeholder="Filter by name"
          value={userName}
          onChange={handleUserName}
        ></input>
      </form>
      <ul>
        {userList.map((ele, idx) => {
          return (
            <li key={idx}>
              <img src={ele.picture} alt="user-name" />
              <span>{ele.userName}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
