import styled from 'styled-components';

const WritingInfoBlock = styled.div`
  background: #ebf4fb;
  border: 1px solid #a6ceed;
  border-radius: 3px;
  width: 800px;
  padding: 24px;
  height: 220px;
  color: #3b4045;

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

  h2 {
    color: #3b4045;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style: disc;
    color: #3b4045;
    margin-left: 40px;
  }

  li {
    font-size: 14px;
    margin: 5px;
  }

  li::marker {
    color: #3b4045;
    font-size: 0.7pc;
  }
`;

const WritingInfo = () => {
  const steps = [
    'Summarize your problem in a one-line title.',
    'Describe your problem in more detail.',
    'Describe what you tried and what you expected to happen.',
    'Add “tags” which help surface your question to members of the community.',
    'Review your question and post it to the site.',
  ];

  return (
    <WritingInfoBlock>
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
    </WritingInfoBlock>
  );
};

export default WritingInfo;
