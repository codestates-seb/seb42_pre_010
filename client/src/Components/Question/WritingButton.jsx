import styled from 'styled-components';

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

  .resetButton {
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

const WritingButton = ({
  buttonSubmitText,
  buttonCancelText,
  handleOnReset,
}) => {
  return (
    <ButtonBlock>
      <button className="submitButton" type="submit">
        {buttonSubmitText}
      </button>
      <button className="resetButton" onClick={handleOnReset} type="reset">
        {buttonCancelText}
      </button>
    </ButtonBlock>
  );
};

export default WritingButton;
