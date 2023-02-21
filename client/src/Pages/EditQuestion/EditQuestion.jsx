import { useState } from 'react';
import styled from 'styled-components';
import {
  WritingTitleForm,
  WritingBodyForm,
} from '../../Components/AskForm/WritingForm';

const EditQuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  padding-left: 24px;
`;

const WritingFormBlock = styled.div`
  border-radius: 3px;
  width: 700px;
  padding: 17px 0px 0px 0px;

  .title {
    font-size: 18px;
    font-weight: bolder;
    margin: 20px 0px;
  }
`;

const EditQuestion = () => {
  // DB에서 title, value 값 가지고 와서 초기값에 넣어 줘야 함
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const handleValue = (value) => {
    setValue(value);
  };

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <EditQuestionBlock>
      <EditQuestionContainer>
        <WritingFormBlock>
          <h3 className="title">Title</h3>
          <WritingTitleForm
            title={title}
            handleOnChangeTitle={handleOnChangeTitle}
          />
          <h3 className="title">Body</h3>
          <WritingBodyForm value={value} handleValue={handleValue} />
        </WritingFormBlock>
      </EditQuestionContainer>
    </EditQuestionBlock>
  );
};

export default EditQuestion;
