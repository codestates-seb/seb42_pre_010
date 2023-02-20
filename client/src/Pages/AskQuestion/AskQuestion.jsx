import styled from 'styled-components';

const AskQuestionBlock = styled.div`
  padding: 30px;
  width: 100%;

  h1 {
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 60px;
  }
`;

const WritingInfo = styled.div`
  background: #ebf4fb;
  border: 1px solid #a6ceed;
  border-radius: 3px;
  padding: 24px;
  width: 820px;
  height: 220px;

  h2 {
    font-size: 21px;
    font-weight: normal;
    margin-bottom: 20px;
    color: #141414;
  }

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
    </AskQuestionBlock>
  );
};

export default AskQuestion;
