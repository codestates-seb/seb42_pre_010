import styled from 'styled-components';
import EditorComponent from './Quill';

const WritingBlock = styled.div`
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

const Writing = ({ title, value, handleOnChangeTitle, handleValue }) => {
  return (
    <WritingBlock>
      <div className="questionTitle">
        <h3 className="title">Title</h3>
        <p>
          Be specific and imagine you’re asking a question to another person.
        </p>
        <input
          value={title}
          onChange={handleOnChangeTitle}
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        />
      </div>

      <div className="writingProblem">
        <h3 className="title">What are the details of your problem?</h3>
        <p>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
        <EditorComponent value={value} handleValue={handleValue} />
      </div>
    </WritingBlock>
  );
};

export default Writing;
