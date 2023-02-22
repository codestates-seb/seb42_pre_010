import { useState } from 'react';
import styled from 'styled-components';
import { WritingBodyForm } from '../../Components/AskForm/WritingForm';
import questionsData from '../Questions/QuestionsDummyData';

const ModifyAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
`;

const ModifyAnswerBlock = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;

const QuestionPost = styled.div`
  /* background: red; */
  margin-top: 30px;
  max-height: 300px;
  overflow: scroll;

  .QuestionTitle {
    font-size: 18px;
    color: #0074d2;
    margin: 5px 0px 20px 0px;
  }

  .QuestionContent {
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
    /* font-weight: bolder; */
    margin: 10px 0px 20px 0px;
  }
`;

const ModifyAnswer = () => {
  const [value, setValue] = useState('');

  const handleValue = (value) => {
    setValue(value);
  };

  return (
    <ModifyAnswerContainer>
      <ModifyAnswerBlock>
        <QuestionPost>
          <h3 className="QuestionTitle">{questionsData[0].title}</h3>
          <div className="QuestionContent">{questionsData[0].content}</div>
        </QuestionPost>
        <WritingFormBlock>
          <h3 className="title">Answer</h3>
          <WritingBodyForm value={value} handleValue={handleValue} />
        </WritingFormBlock>
      </ModifyAnswerBlock>
    </ModifyAnswerContainer>
  );
};

export default ModifyAnswer;
