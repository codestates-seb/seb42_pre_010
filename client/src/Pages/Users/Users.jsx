import styled from 'styled-components';
// import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import questionsData from '../../data/Questions';

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

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(224px, auto));
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
  }
`;

const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 13px;
`;

const Users = () => {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState(questionsData);

  const filterUser = () => {
    const userData = questionsData.filter((ele) => {
      if (userName === '') {
        return questionsData;
      } else {
        return ele.username.includes(userName);
      }
    });
    setUserList(userData);
  };

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
    filterUser();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <UsersContainer>
      <UsersTitle>Users</UsersTitle>
      <SearchBox>
        <GoSearch />
        <form onSubmit={handleOnSubmit}>
          <input
            placeholder="Filter by name"
            value={userName}
            onChange={handleUserName}
          ></input>
        </form>
      </SearchBox>
      <ProfileContainer>
        {userList.map((ele, idx) => {
          return (
            <div key={idx}>
              <ProfilePic src={ele.picture} alt="user-name" />
              <span>{ele.username}</span>
            </div>
          );
        })}
      </ProfileContainer>
    </UsersContainer>
  );
};

export default Users;
