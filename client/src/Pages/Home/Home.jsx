import styled from 'styled-components';
import questionsData from '../../data/Questions';
import Question from '../../Components/Questions/Question';
import { useState } from 'react';
import Pagination from '../../Components/Pagination';

const HomeContainer = styled.div`
  width: calc(100% - 324px);
`;

const HomeQuestionsListContainer = styled.ul`
  border-top: 1px solid gray;
  width: auto;
`;

const HomeTitle = styled.h1`
  font-size: 27px;
  font: bold;
`;

const HomeTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const ButtonNav = styled.button`
  background-color: ${(props) =>
    props.value === props.currentTap ? '#e3e6e8' : 'white'};
  box-sizing: border-box;
  height: 100%;
  border: none;
  border-right: 1px solid gray;
  align-items: center;
  text-align: center;
  padding: 15px;
  :first-child {
    border-left: 1px solid gray;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }

  :nth-child(2) {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }

  :last-child {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const Home = () => {
  const [currentTap, setCurrentTap] = useState('year');
  const sortTap = ['Year', 'Month', 'Day'];
  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 쪽수
  const [postsPerPage] = useState(5); // 한 페이지 당 보여지는 게시물수
  const page = Math.ceil(questionsData.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage; // 페이지의 마지막 게시물 위치
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 페이지의 첫번째 게시물 위치
  const currentPosts = questionsData.slice(indexOfFirstPost, indexOfLastPost); // 보여져야 하는 게시물만큼 Slice

  // paginate
  const paginate = (pageNumber) => {
    if (pageNumber === 0) return;
    if (pageNumber > page) return;
    setCurrentPage(pageNumber);
  };

  const onTapClick = (tabName) => {
    setCurrentTap(tabName.toLowerCase());
    console.log(currentTap);
  };

  return (
    <HomeContainer>
      <HomeTitleContainer>
        <HomeTitle>All Questions</HomeTitle>
        <button>
          <a href="/askquestions">Ask Question</a>
        </button>
      </HomeTitleContainer>
      <ButtonContainer>
        {sortTap.map((ele, idx) => {
          return (
            <ButtonNav
              onClick={() => onTapClick(ele)}
              value={ele.toLowerCase()}
              key={idx}
              currentTap={currentTap}
            >
              {ele}
            </ButtonNav>
          );
        })}
      </ButtonContainer>
      <HomeQuestionsListContainer>
        {currentPosts.map((ele) => {
          return (
            <Question questionData={ele} key={ele.id} currentTap={currentTap} />
          );
        })}
      </HomeQuestionsListContainer>
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={questionsData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </HomeContainer>
  );
};

export default Home;
