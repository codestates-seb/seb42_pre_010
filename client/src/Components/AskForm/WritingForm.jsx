import styled from 'styled-components';
import TextEditor from './TextEditor';

const WritionForm = styled.div`
  input {
    border: none;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    height: 30px;
    width: 98%;
    padding: 3px 10px;
  }

  input:focus {
    outline: none;
    border: 1px solid #a6ceed;
    box-shadow: 1px 1px 1px 5px #d9eaf7;
  }
`;

const WritingTitleForm = ({ title, handleOnChangeTitle }) => {
  return (
    <WritionForm>
      <input
        value={title}
        onChange={handleOnChangeTitle}
        placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
      />
    </WritionForm>
  );
};

const WritingBodyForm = ({ value, handleValue }) => {
  return (
    <WritionForm>
      <TextEditor
        className="textEditor"
        value={value}
        handleValue={handleValue}
      />
    </WritionForm>
  );
};

export { WritingTitleForm, WritingBodyForm };
