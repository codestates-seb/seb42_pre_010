import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '.';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
// import Users from './Pages/Users/Users';
import Questions from './Pages/Questions/Questions';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Nav />
        <Routes>
          <Route />
        </Routes>
        <Questions />
        <Sidebar />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
