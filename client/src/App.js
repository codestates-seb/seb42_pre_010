import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, WithoutRoot } from './GlobalStyle';
//import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signup/Signup';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import Tag from './Pages/Tag/Tag';
import Users from './Pages/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> }, // index가 true인 컴포넌트는 Root의 Outlet에 기본으로 보여짐
      { path: '/users', element: <Users /> },
      { path: '/tags', element: <Tag /> },
    ],
  },
  {
    path: '/',
    element: <WithoutRoot />, // Nav, Footer, Sidebar가 없는 페이지
    children: [
      { path: '/users/login', element: <Login /> },
      { path: '/users/signup', element: <Signin /> },
      { path: '/questions', element: <AskQuestion /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
