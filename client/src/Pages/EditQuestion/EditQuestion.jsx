import { useState } from 'react';
import styled from 'styled-components';
import {
  WritingTitleForm,
  WritingBodyForm,
} from '../../Components/AskForm/WritingForm';
import EditButton from '../../Components/Button/EditButton';
import { EditMemo } from '../../Components/SideMemo/SideMemo';
import { useLocation } from 'react-router';

const EditQuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  padding-left: 150px;
`;

const WritingFormBlock = styled.div`
  border-radius: 3px;
  width: 700px;

  .title {
    font-size: 18px;
    font-weight: bolder;
    margin: 20px 0px;
  }
`;

const ButtonBlock = styled.div`
  margin-left: 150px;
`;

const EditQuestion = () => {
  const data = useLocation();
  const questionData = data.state.data;

  const [title, setTitle] = useState(questionData.title);
  const [value, setValue] = useState(questionData.contents);

  const handleValue = (value) => {
    setValue(value);
  };

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnCancel = () => {
    window.location.href = './questions';
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
        <EditMemo />
      </EditQuestionContainer>
      <ButtonBlock>
        <EditButton className="button" handleOnCancel={handleOnCancel} />
      </ButtonBlock>
    </EditQuestionBlock>
  );
};

export default EditQuestion;
