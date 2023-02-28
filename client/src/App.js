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
import { getAllQuestion } from './services/QuestionService';

function App() {
  const [logged, setLogged] = useState(false); // 로그인 여부
  const [currUser, setCurrUser] = useState([]); // 로그인 완료한 현재 이용 유저 정보
  const [userList, setUserList] = useState(null); // 전체 회원 리스트
  const [questionList, setQuestionList] = useState(null); // 전체 질문 리스트

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('logged');
    if (storedUserLoggedInInformation === 'false') {
      setLogged(false);
    }
  }, []); // 1st render시 비로그인 상태 유지

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('logged');
    if (storedUserLoggedInInformation === 'true') {
      setLogged(!logged);

      const userData = JSON.parse(localStorage.getItem('userData'));
      setCurrUser(userData);
    }
  }, [setLogged]); // 로그인 상태가 변경되는 상황에만 re-render

  useEffect(
    () => {
      getAllUsers().then((data) => {
        setUserList(data);
      });
    },
    [currUser] // 회원가입 하면서 유저가 추가 시 re-render
  );
  useEffect(
    () => {
      getAllQuestion().then((data) => {
        setQuestionList(data);
      });
    },
    [setQuestionList] // 전체 질문 리스트에 새 질문이 추가 시 re-render
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Root logged={logged} currUser={currUser} setLogged={setLogged} />
      ),
      children: [
        { index: true, element: <Home /> }, // index가 true인 컴포넌트는 Root의 Outlet에 기본으로 보여짐
        {
          path: '/allquestion',
          element: <Questions questionList={questionList} />,
        },
      ],
    },
    {
      path: '/',
      element: (
        <WithoutRoot
          logged={logged}
          currUser={currUser}
          setLogged={setLogged}
        />
      ), // Nav, Footer, Sidebar가 없는 페이지
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
        {
          path: '/askquestions',
          element: <AskQuestion logged={logged} currUser={currUser} />,
        },
      ],
    },
    {
      path: '/',
      element: (
        <WithoutSideBar
          logged={logged}
          currUser={currUser}
          setLogged={setLogged}
        />
      ), // Sidebar가 없는 페이지
      children: [
        { path: '/tags', element: <Tag /> },
        {
          path: '/allusers',
          element: (
            <Users logged={logged} currUser={currUser} userList={userList} />
          ),
        },
        {
          path: '/card/users/:userId',
          element: <UserDetail currUser={currUser} userList={userList} />,
        },
        { path: '/edit', element: <EditQuestion /> },
        {
          path: '/allquestion/:id',
          element: <DetailQuestion questionList={questionList} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
