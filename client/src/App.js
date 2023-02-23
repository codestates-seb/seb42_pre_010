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
import { useState } from 'react';

function App() {
  const [logged, setLogged] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root logged={logged} />,
      children: [
        { index: true, element: <Home /> }, // index가 true인 컴포넌트는 Root의 Outlet에 기본으로 보여짐
        // { path: '/tags', element: <Tag /> },
        // { path: '/users', element: <Users /> },
        { path: '/questions', element: <Questions /> },
      ],
    },
    {
      path: '/',
      element: <WithoutRoot logged={logged} />, // Nav, Footer, Sidebar가 없는 페이지
      children: [
        {
          path: '/users/login',
          element: <Login logged={logged} setLogged={setLogged} />,
        },
        {
          path: '/users/signup',
          element: <Signin logged={logged} setLogged={setLogged} />,
        },
        { path: '/askquestions', element: <AskQuestion /> },
      ],
    },
    {
      path: '/',
      element: <WithoutSideBar logged={logged} />, // Sidebar가 없는 페이지
      children: [
        { path: '/tags', element: <Tag /> },
        { path: '/users', element: <Users /> },
        { path: '/users/id', element: <UserDetail /> },
        { path: '/edit', element: <EditQuestion /> },
        { path: '/questions/id', element: <DetailQuestion /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
