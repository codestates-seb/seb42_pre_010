import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import WritingInfo from '../../Components/AskForm/WritingInfo';
import {
  WritingTitleForm,
  WritingBodyForm,
} from '../../Components/AskForm/WritingForm';
import { useNavigate } from 'react-router-dom';

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

  .cancelButton {
    color: #ab262a;
    border: none;
    background: #ffffff;
    box-shadow: none;

    &:hover {
      background-color: #fdf2f2;
      cursor: pointer;
    }
  }
`;

const AskQuestion = ({ currUser, setQuestionList }) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  // 현재 로그인한 유저 id
  const loggedUserId = currUser?.data.userId;

  const navigate = useNavigate();

  const handleValue = (value) => {
    setValue(value);
  };

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/questions/ask', {
        userId: loggedUserId,
        title: title,
        contents: value,
      })
      .then(() => {
        axios.get('/questions?page=1&size=1000').then((res) => {
          setQuestionList(res.data.data);
        });
      })
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        console.log('Error!');
      });
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
        <ButtonBlock>
          <button className="submitButton" onClick={handleSubmit} type="submit">
            Ask!
          </button>
          <button className="cancelButton" onClick={handleOnReset} type="reset">
            Discard draft
          </button>
        </ButtonBlock>
      </form>
    </AskQuestionBlock>
  );
};

export default AskQuestion;
