import styled from 'styled-components';

const SideMemoBlock = styled.div`
  width: 330px;
  border-radius: 3px;
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
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.041), 0 0px 2px rgba(0, 0, 0, 0.096);
    border: 1px solid #efe8cd;
    padding-left: 30px;
    padding: 11px 0px 11px 30px;
    height: auto;
    background: #fdf7e2;
    border-radius: 3px;
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

const EditMemo = () => {
  const memoText = [
    'Correct minor typos or mistakes',
    'Clarify meaning without changing it',
    'Add related resources or links',
    'Always respect the author’s intent',
    'Don’t use edits to reply to the author',
  ];
  return (
    <SideMemoBlock>
      <div className="memoTitle">How to Edit</div>
      <ul>
        {memoText.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </SideMemoBlock>
  );
};

const FormatMemo = () => {
  const memoText = [
    'create code fences with backticks ` or tildes ~',
    'add language identifier to highlight code',
    'put returns between paragraphs',
    'for linebreak add 2 spaces at end',
    '_italic_ or **bold**',
    'indent code by 4 spaces',
    'backtick escapes `like _so_`',
    'quote by placing > at start of line',
    `to make links (use https whenever possible)
    <https://example.com>
    [example](https://example.com)
    <a href="https://example.com">example</a>`,
  ];
  return (
    <SideMemoBlock>
      <div className="memoTitle">How to Format</div>
      <ul>
        {memoText.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </SideMemoBlock>
  );
};

export { EditMemo, FormatMemo };
