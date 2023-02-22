import { useState } from 'react';
import styled from 'styled-components';
import { WritingBodyForm } from '../../Components/AskForm/WritingForm';
import questionsData from '../Questions/QuestionsDummyData';
import EditButton from '../../Components/Button/EditButton';

const ModifyAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
`;

const ModifyAnsweyrWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModifyAnswerBlock = styled.div`
  width: 700px;
  padding-left: 24px;
`;

const QuestionPost = styled.div`
  margin-top: 30px;
  max-height: 300px;
  overflow: scroll;

  .questionTitle {
    font-size: 18px;
    color: #0074d2;
    margin: 5px 0px 20px 0px;
  }

  .questionContent {
    font-size: 14px;
    line-height: 1.5em;
    margin-bottom: 10px;
  }
`;

const WritingFormBlock = styled.div`
  border-radius: 3px;
  width: 700px;
  padding: 17px 0px 0px 0px;

  .title {
    font-size: 18px;
    margin: 10px 0px 20px 0px;
  }
`;

const ModifyAnswer = () => {
  const [value, setValue] = useState('');

  const handleValue = (value) => {
    setValue(value);
  };

  const handleOnCancel = () => {
    window.location.href = './questions';
  };

  return (
    <ModifyAnswerContainer>
      <ModifyAnsweyrWrap>
        <ModifyAnswerBlock>
          <QuestionPost>
            <h3 className="questionTitle">{questionsData[0].title}</h3>
            <div className="questionContent">{questionsData[0].content}</div>
          </QuestionPost>
          <WritingFormBlock>
            <h3 className="title">Answer</h3>
            <WritingBodyForm value={value} handleValue={handleValue} />
          </WritingFormBlock>
        </ModifyAnswerBlock>
        <EditButton className="button" handleOnCancel={handleOnCancel} />
      </ModifyAnsweyrWrap>
    </ModifyAnswerContainer>
  );
};

export default ModifyAnswer;
