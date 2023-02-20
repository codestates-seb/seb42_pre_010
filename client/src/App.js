import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '.';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
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
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
