import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, WithoutRoot, WithoutSideBar } from './GlobalStyle';
//import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signup/Signup';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import Tag from './Pages/Tag/Tag';
import Users from './Pages/Users/Users';
import UserDetail from './Pages/UserDetail/UserDetail';
import Questions from './Pages/Questions/Questions';
import EditQuestion from './Pages/EditQuestion/EditQuestion';
import DetailQuestion from './Pages/DetailQuestion/DetailQuestion';
// import ModifyAnswer from './Pages/ModifyAnswer/ModifyAnswer';
import { useEffect, useState } from 'react';
import { getAllUsers } from './services/UserService';

function App() {
  const [logged, setLogged] = useState(false); // 로그인 여부
  const [currUser, setCurrUser] = useState([]); // 로그인 완료한 현재 이용 유저 정보
  const [userList, setUserList] = useState(null); // 전체 회원 리스트

  useEffect(() => {
    getAllUsers().then((data) => {
      setUserList(data.data);
    });
  }, [setUserList, currUser]); // 회원가입 하면서 유저가 추가될 때 currUSer가 업데이트 됨

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root logged={logged} currUser={currUser} />,
      children: [
        { index: true, element: <Home /> }, // index가 true인 컴포넌트는 Root의 Outlet에 기본으로 보여짐
        { path: '/questions', element: <Questions /> },
      ],
    },
    {
      path: '/',
      element: <WithoutRoot logged={logged} currUser={currUser} />, // Nav, Footer, Sidebar가 없는 페이지
      children: [
        {
          path: '/users/login',
          element: (
            <Login
              logged={logged}
              setLogged={setLogged}
              setCurrUser={setCurrUser}
            />
          ),
        },
        {
          path: '/users/signup',
          element: (
            <Signin
              logged={logged}
              setLogged={setLogged}
              setCurrUser={setCurrUser}
            />
          ),
        },
        { path: '/askquestions', element: <AskQuestion /> },
      ],
    },
    {
      path: '/',
      element: <WithoutSideBar logged={logged} currUser={currUser} />, // Sidebar가 없는 페이지
      children: [
        { path: '/tags', element: <Tag /> },
        { path: '/users', element: <Users /> },
        {
          path: '/card/users/:userId',
          element: <UserDetail currUser={currUser} userList={userList} />,
        },
        { path: '/edit', element: <EditQuestion /> },
        { path: '/questions/id', element: <DetailQuestion /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
