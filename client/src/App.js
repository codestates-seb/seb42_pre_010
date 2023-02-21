import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '.';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
// import Users from './Pages/Users/Users';
// import Questions from './Pages/Questions/Questions';
// import Home from './Pages/Home/Home';
import styled from 'styled-components';

//수정 함@16:28
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
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
            <Route />
          </Routes>
        </Content>
        <Sidebar />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
