import styled from 'styled-components';
import questionsData from './QuestionsDummyData';
import Question from '../../Components/Questions/Question';

const QuestionsContainer = styled.ul`
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
  margin-bottom: 15px;
`;

const Questions = () => {
  return (
    <div>
      <TitleContainer>
        <QuestionsTitle>All Questions</QuestionsTitle>
        <button>Ask Question</button>
      </TitleContainer>
      <QuestionsLength>{questionsData.length} questions</QuestionsLength>
      <QuestionsContainer>
        {questionsData.map((ele) => {
          return <Question questionData={ele} key={ele.id} />;
        })}
      </QuestionsContainer>
    </div>
  );
};

export default Questions;
