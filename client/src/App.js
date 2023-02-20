import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '.';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import UserCard from './Components/Users/UserCard';
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
            {/* 출력 테스트용 임의 작성 */}
            <Route path="/" element={<UserCard />} />
          </Routes>
        </Content>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
