import { useState } from 'react';
import styled from 'styled-components';
import { WritingBodyForm } from '../../Components/AskForm/WritingForm';
import questionsData from '../Questions/QuestionsDummyData';

const ModifyAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ModifyAnswerBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding-left: 24px;
`;

const QuestionPost = styled.div`
  background: red;
`;

const WritingFormBlock = styled.div`
  border-radius: 3px;
  width: 700px;
  padding: 17px 0px 0px 0px;

  .title {
    font-size: 18px;
    /* font-weight: bolder; */
    margin: 20px 0px;
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
