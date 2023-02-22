import styled from 'styled-components';
import questionsData from '../Questions/QuestionsDummyData';
import Question from '../../Components/Questions/Question';
import { useState } from 'react';

const HomeContainer = styled.div`
  width: calc(100% - 324px);
`;

const HomeQuestionsListContainer = styled.ul`
  border-top: 1px solid gray;
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
        {questionsData.map((ele) => {
          return (
            <Question questionData={ele} key={ele.id} currentTap={currentTap} />
          );
        })}
      </HomeQuestionsListContainer>
    </HomeContainer>
  );
};

export default Home;
