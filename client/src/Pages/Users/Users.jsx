import styled from 'styled-components';
// import Footer from '../../Components/Footer/Footer';
import { GoSearch } from 'react-icons/go';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { getAllUsers } from '../../services/UserService';

const UsersBlock = styled.div`
  width: 1100px;
  padding-left: 24px;
`;

const UsersTitle = styled.h1`
  font-size: 27px;
  margin-bottom: 24px;
`;

const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const UserNavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileBlock = styled.div`
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

const UserListInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    width: 100%;
  }

  .userinfo-name {
    font-size: 15px;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .userinfo-questions {
    margin-bottom: 3px;
  }

  .userinfo-questions,
  .userinfo-answers {
    font-size: 13px;
  }
`;

const UsersNavButton = styled.button`
  background-color: ${(props) =>
    props.value === props.currentNavButton ? '#e3e6e8' : 'white'};
  box-sizing: border-box;
  height: 100%;
  border: none;
  border-right: 1px solid gray;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  align-items: center;
  text-align: center;
  padding: 10px;

  :first-child {
    border-left: 1px solid gray;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }

  :last-child {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const UserFilterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 25px;
`;

const UserFilterName = styled.span`
  padding: 8px;
  font-size: 12px;
  margin-left: 2px;
  border-bottom: ${(props) =>
    props.value === props.userFilter ? '2px solid #F48225' : 'none'};
`;

const Users = () => {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState([]);
  const [currentNavButton, setCurrentNavButton] = useState('reputation');
  const [userFilter, setUserFilter] = useState('week');
  const buttonList = [
    'Reputation',
    'New Users',
    'Voters',
    'Editors',
    'Moderators',
  ];
  const userFilterList = ['week', 'month', 'quarter', 'year', 'all'];

  // 서버로부터 userData 받아와서 userList에 넣기
  // useEffect(() => {
  //   const getdata = async () => {
  //     //서버에서 데이터를 받아온 상태
  //     const userLists = await getAllUsers();
  //     // 검색창이 빈칸일경우는 전체 렌더링
  //     if (userName === null || userName === '') {
  //       setUserList(userLists);
  //       // 검색창에 입력값이 있을 경우, 필터링 해서 출력
  //     } else {
  //       let filteredList = [];
  //       filteredList = userList.filter((ele) => {
  //         return ele.userName.toLowerCase().includes(userName.toLowerCase());
  //       });
  //       setUserList(filteredList);
  //     }
  //   };
  //   getdata();
  // }, [userName]);

  useEffect(() => {
    if (userName === null || userName === '') {
      axios.get('http://localhost:3001/users').then((res) => {
        setUserList(res.data);
      });
    } else {
      axios.get('http://localhost:3001/users').then((res) => {
        const filteredList = res.data.filter((ele) => {
          return ele.userName.toLowerCase().includes(userName.toLowerCase());
        });
        setUserList(filteredList);
      });
    }
  }, [userName]);

  const onTapClick = (tabName) => {
    setCurrentNavButton(tabName.toLowerCase());
    console.log(userList);
  };

  const onUserFilterClick = (filterName) => {
    setUserFilter(filterName);
  };

  //useEffect를 사용, input의 value가 바뀌면 state값 바로바로 변경 해주기
  // useEffect(() => {
  //   const userData = userList.filter((ele) => {
  //     if (userName === '') {
  //       return userList;
  //     } else {
  //       return ele.userName.toLowerCase().includes(userName.toLowerCase());
  //     }
  //   });
  //   setUserList(userData);
  // }, [userName]);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <UsersBlock>
      <UsersTitle>Users</UsersTitle>
      <UserNavBlock>
        <SearchBlock>
          <GoSearch />
          <form onSubmit={handleOnSubmit}>
            <input
              placeholder="Filter by name"
              value={userName}
              onChange={handleUserName}
            ></input>
          </form>
        </SearchBlock>
        <div>
          {buttonList.map((ele, idx) => {
            return (
              <UsersNavButton
                key={idx}
                onClick={() => onTapClick(ele)}
                value={ele.toLowerCase()}
                currentNavButton={currentNavButton}
              >
                {ele}
              </UsersNavButton>
            );
          })}
        </div>
      </UserNavBlock>
      <UserFilterBlock>
        {userFilterList.map((ele, idx) => {
          return (
            <UserFilterName
              key={idx}
              value={ele}
              onClick={() => onUserFilterClick(ele)}
              userFilter={userFilter}
              role="presentation"
            >
              {ele}
            </UserFilterName>
          );
        })}
      </UserFilterBlock>
      <ProfileBlock>
        {userList?.map((ele, idx) => {
          return (
            <div key={idx}>
              <ProfilePic src={ele.picture} alt="user-name" />
              <UserListInfo>
                <span className="userinfo-name">{ele.userName}</span>
                <span className="userinfo-questions">
                  Questions: {ele.questionCount}
                </span>
                <span className="userinfo-answers">
                  Answers: {ele.answerCount}
                </span>
              </UserListInfo>
            </div>
          );
        })}
      </ProfileBlock>
    </UsersBlock>
  );
};

export default Users;
