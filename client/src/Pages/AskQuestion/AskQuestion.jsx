import styled from 'styled-components';
import EditorComponent from './Quill';

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

const WritingInfo = styled.div`
  background: #ebf4fb;
  border: 1px solid #a6ceed;
  border-radius: 3px;
  width: 900px;
  padding: 24px;
  height: 220px;

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  strong {
    color: #0074d2;
  }

  strong:hover {
    color: #309df7;
  }

  h3 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style: disc;
    color: #141414;
    margin-left: 40px;
  }

  li {
    font-size: 14px;
    margin: 5px;
  }

  li::marker {
    color: #141414;
    font-size: 0.7pc;
  }
`;

const Writing = styled.div`
  width: 900px;
  padding: 24px;
  margin: 20px 0px;
  border-radius: 3px;
  border: 1px solid #d6d9dc;

  .title {
    font-size: 18px;
    font-weight: bolder;
    margin: 5px 0px;
  }

  p {
    font-size: 16px;
    margin: 10px 0px 20px;
  }

  input {
    border: none;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    height: 30px;
    width: 96%;
    padding: 3px 10px;
  }

  input:focus {
    outline: none;
    border: 1px solid #a6ceed;
    box-shadow: 1px 1px 1px 5px #d9eaf7;
  }
`;

const AskQuestion = () => {
  const steps = [
    'Summarize your problem in a one-line title.',
    'Describe your problem in more detail.',
    'Describe what you tried and what you expected to happen.',
    'Add “tags” which help surface your question to members of the community.',
    'Review your question and post it to the site.',
  ];
  return (
    <AskQuestionBlock>
      <h1>Ask a public question</h1>
      <WritingInfo>
        <h2>Writing a good question</h2>
        <p>
          You’re ready to <strong>ask</strong> a{' '}
          <strong>programming-related question </strong>
          and this form will help guide you through the process.
          <br />
          Looking to ask a non-programming question? See{' '}
          <strong>the topics here </strong>to find a relevant site.
        </p>
        <h3>Steps</h3>
        <ul>
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </WritingInfo>
      <form>
        <Writing>
          <div className="questionTitle">
            <h3 className="title">Title</h3>
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <input placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
          </div>
        </Writing>
        <Writing>
          <div className="writingProblem">
            <h3 className="title">What are the details of your problem?</h3>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <EditorComponent />
          </div>
        </Writing>
      </form>
    </AskQuestionBlock>
  );
};

export default AskQuestion;
