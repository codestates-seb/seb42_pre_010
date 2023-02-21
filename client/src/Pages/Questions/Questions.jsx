import styled from 'styled-components';
import questionsData from './QuestionsDummyData';
import Question from '../../Components/Questions/Question';

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

  button {
    padding: 10px;
    border: 1px solid gray;
  }

  .QuestionsButton-first-button {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .QuestionsButton-mid-button {
    border-radius: 0%;
  }

  .QuestionsButton-third-button {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

const Questions = () => {
  return (
    <QuestionsContainer>
      <TitleContainer>
        <QuestionsTitle>All Questions</QuestionsTitle>
        <button>Ask Question</button>
      </TitleContainer>
      <QuestionsButtonContainer>
        <QuestionsLength>{questionsData.length} questions</QuestionsLength>
        <div>
          <button className="QuestionsButton-first-button">Newest</button>
          <button className="QuestionsButton-mid-button">Unanswered</button>
          <button className="QuestionsButtonthird-button">Voted</button>
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
