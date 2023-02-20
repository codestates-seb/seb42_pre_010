import { useState } from 'react';
import styled from 'styled-components';
import WritingInfo from './WritingInfo';
import Writing from './Writing';

const AskQuestionBlock = styled.div`
  padding: 30px;
  width: 100%;

  h1 {
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 60px;
  }

  h2 {
    font-size: 21px;
    font-weight: normal;
    margin-bottom: 20px;
    color: #141414;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 20px 80px 20px;

  button {
    margin-right: 20px;
    width: 80px;
    height: 35px;
    border-radius: 4px;
    border: none;
  }

  .submitButton {
    border: 1px solid #0a95ff;
    background-color: #0a95ff;
    box-shadow: inset 0 1px 0 0 #6fc0ff;
    color: white;

    &:hover {
      background-color: #2277b8;
      border: 1px solid #0a95ff;
      box-shadow: inset 0 1px 0 0 #0a95ff;
      color: #ffffff;
      cursor: pointer;
    }
  }

  .reseButton {
    color: #ab262a;
    border: none;
    /* background: #fdf2f2; */
    background: #ffffff;
    box-shadow: none;

    &:hover {
      background-color: #fdf2f2;
      /* border: 1px solid #0a95ff;
      box-shadow: inset 0 1px 0 0 #0a95ff;
      color: #ffffff; */
      cursor: pointer;
    }
  }
`;

const AskQuestion = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const handleValue = (value) => {
    console.log(value);
    setValue(value);
  };

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnReset = () => {
    setTitle('');
    setValue('');
  };

  return (
    <AskQuestionBlock>
      <h1>Ask a public question</h1>
      <WritingInfo />
      <form>
        <Writing
          title={title}
          value={value}
          handleOnChangeTitle={handleOnChangeTitle}
          handleValue={handleValue}
        />
        <ButtonBlock>
          <button className="submitButton" type="sumit">
            Ask!
          </button>
          <button className="reseButton" onClick={handleOnReset} type="reset">
            Discard draft
          </button>
        </ButtonBlock>
      </form>
    </AskQuestionBlock>
  );
};

export default AskQuestion;
