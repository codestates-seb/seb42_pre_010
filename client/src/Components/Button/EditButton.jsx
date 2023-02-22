import styled from 'styled-components';

const EditButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 20px 80px 25px;

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
    color: #0074cc;
    border: none;
    background: #ffffff;
    box-shadow: none;

    &:hover {
      background-color: #f0f8ff;
      cursor: pointer;
    }
  }
`;

const EditButton = ({ handleOnCancel }) => {
  return (
    <EditButtonBlock>
      <button className="submitButton" type="submit">
        Save edits
      </button>
      <button className="cancelButton" onClick={handleOnCancel} type="reset">
        Cancel
      </button>
    </EditButtonBlock>
  );
};

export default EditButton;
