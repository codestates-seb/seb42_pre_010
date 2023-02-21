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

const SideMemo = styled.div`
  background: #fdf7e2;
  width: 330px;
  height: 230px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.041), 0 0px 2px rgba(0, 0, 0, 0.096);
  border: 1px solid #efe8cd;
  margin: 40px 1px 1px 20px;

  .memoTitle {
    border: 1px solid #efe8cd;
    background: #fbf3d5;
    padding: 12px;
    height: 16px;
    color: #3b4045;
    font-size: 15px;
  }
  ul {
    padding-left: 30px;
    padding: 11px 0px 11px 30px;
  }

  li {
    list-style: disc;
    font-size: small;
    padding: 10px 0px 10px 0px;
  }

  li::marker {
    color: #141414;
    font-size: 0.7pc;
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

  const memoText = [
    'Correct minor typos or mistakes',
    'Clarify meaning without changing it',
    'Add related resources or links',
    'Always respect the author’s intent',
    'Don’t use edits to reply to the author',
  ];

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
        <SideMemo>
          <div className="memoTitle">How to Edit</div>
          <ul>
            {memoText.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
        </SideMemo>
      </EditQuestionContainer>
    </EditQuestionBlock>
  );
};

export default EditQuestion;
