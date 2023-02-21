import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '.';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Questions from './Pages/Questions/Questions';
import Tag from './Pages/Tag/Tag';
import Users from './Pages/Users/Users';
import styled from 'styled-components';

//수정 함@16:28
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 1100px;
  max-width: 1100px;
  height: 100%;
  padding: 24px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Nav />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<Users />} />
            <Route path="questions" element={<Questions />} />
            <Route path="/tags" element={<Tag />} />
          </Routes>
          <Sidebar />
        </Content>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
