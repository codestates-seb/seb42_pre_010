import { useState } from 'react';
import styled from 'styled-components';
import WritingInfo from '../../Components/AskForm/WritingInfo';
import {
  WritingTitleForm,
  WritingBodyForm,
} from '../../Components/AskForm/WritingForm';
import Button from '../../Components/AskForm/Button';

const AskQuestionBlock = styled.div`
  background: #f8f9f9;
  padding: 3% 5% 5% 18%;

  h1 {
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 100px;
    color: #232629;
  }

  h2 {
    font-size: 21px;
    font-weight: normal;
    margin-bottom: 20px;
    color: #141414;
  }

  img {
    position: absolute;
    width: 600px;
    top: 50px;
    left: 51.8%;
  }
`;

const WritingBlock = styled.div`
  width: 800px;
  padding: 24px;
  margin: 20px 0px;
  border-radius: 3px;
  border: 1px solid #d6d9dc;

  .title {
    font-size: 15px;
    font-weight: bold;
    margin: 5px 0px;
  }
  p {
    font-size: 14px;
    margin: 10px 0px 20px;
  }

  .questionTitle {
    margin-bottom: 30px;
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
      <img alt="background images" src="/images/background.svg" />
      <WritingInfo />
      <form>
        <WritingBlock>
          <div className="questionTitle">
            <h3 className="title">Title</h3>
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <WritingTitleForm
              title={title}
              handleOnChangeTitle={handleOnChangeTitle}
            />
          </div>
          <div className="writingProblem">
            <h3 className="title">What are the details of your problem?</h3>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <WritingBodyForm value={value} handleValue={handleValue} />
          </div>
        </WritingBlock>
        <Button
          buttonSubmitText="Ask!"
          buttonCancelText="Discard draft"
          handleOnReset={handleOnReset}
        />
      </form>
    </AskQuestionBlock>
  );
};

export default AskQuestion;
