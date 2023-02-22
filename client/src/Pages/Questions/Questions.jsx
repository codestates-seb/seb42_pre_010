import styled from 'styled-components';
import questionsData from './QuestionsDummyData';
import Question from '../../Components/Questions/Question';
import { useState } from 'react';

const QuestionsContainer = styled.div`
  width: calc(100% - 324px);
`;

const QuestionsListContainer = styled.ul`
  border-top: 1px solid gray;
`;

const QuestionsTitle = styled.h1`
  font-size: 27px;
  font: bold;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const QuestionsLength = styled.span`
  display: flex;
  text-align: center;
`;

const QuestionsButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const QuestionsButtonNav = styled.button`
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

const Questions = () => {
  const questionsNavButton = ['Newest', 'Unanswered', 'Voted'];
  const [currentTap, setCurrentTap] = useState('newest');

  const onTapClick = (tabName) => {
    setCurrentTap(tabName.toLowerCase());
    console.log(currentTap);
  };

  return (
    <QuestionsContainer>
      <TitleContainer>
        <QuestionsTitle>All Questions</QuestionsTitle>
        <button>
          <a href="/askquestions">Ask Question</a>
        </button>
      </TitleContainer>
      <QuestionsButtonContainer>
        <QuestionsLength>{questionsData.length} questions</QuestionsLength>
        <div>
          {questionsNavButton.map((ele, idx) => {
            return (
              <QuestionsButtonNav
                key={idx}
                onClick={() => onTapClick(ele)}
                value={ele.toLowerCase()}
                currentTap={currentTap}
              >
                {ele}
              </QuestionsButtonNav>
            );
          })}
        </div>
      </QuestionsButtonContainer>
      <QuestionsListContainer>
        {questionsData.map((ele) => {
          return <Question questionData={ele} key={ele.id} />;
        })}
      </QuestionsListContainer>
    </QuestionsContainer>
  );
};

export default Questions;
