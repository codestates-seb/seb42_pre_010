import styled from 'styled-components';

export const SignupWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 1264px; */
  height: 962px;
  background-color: hsl(210, 8%, 95%);
  a {
    text-decoration: none;
  }
`;

export const SignupInfoSection = styled.div`
  width: 440px;
  font-size: 13px;
  .Sublink {
    color: gray;
  }
  .Subalink {
    color: rgba(51, 160, 255, 1);
  }
`;

export const SignupFormSection = styled.div`
  width: 440px;
`;

export const SignupSocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const SignupGoogle = styled.button`
  width: 350px;
  padding: 10px;
  margin: 4px 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid hsl(210, 8%, 85%);
`;

export const BtnText = styled.span`
  margin-left: 5px;
`;

export const SignupGithub = styled(SignupGoogle)`
  background-color: #2f3338;
  color: white;
`;

export const SignupFacebook = styled(SignupGithub)`
  background-color: #365499;
`;

export const SignupInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 24px;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px,
    rgb(0 0 0 / 10%) 0px 1px 4px;
  margin-bottom: 24px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const SignupInputBlock = styled.div`
  margin: 6px 0;
`;

export const SignupInputTitle = styled.div`
  padding: 0 2px;
  font-weight: bold;
`;

export const TextInput = styled.input`
  width: 250px;
  height: 32px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Requisition = styled.p`
  color: hsl(210, 8%, 45%);
  font-size: 12px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

export const TestBlock = styled.div`
  margin: 6px 0;
  padding: 8px 0px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 8%, 95%);
  border-color: hsl(210, 8%, 90%);
  border-radius: 3px;
  border-width: 1px;
`;

export const OptionBlock = styled.div`
  display: flex;
  margin: 6px 0;
`;

export const CheckBox = styled.input`
  margin-right: 4px;
  vertical-align: middle;
  border-radius: 3px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 1em;
  height: 1em;
  border: 1px solid hsl(210, 8%, 75%);
  outline: 0;
  background-color: white;
`;

export const OptionInfo = styled.label`
  line-height: 1rem;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  padding: 0 2px;
  color: hsl(210, 8%, 5%);
`;

export const SignupSubmitBtn = styled.button`
  margin: 8px 0;
  background-color: hsl(206, 100%, 52%);
  color: white;
  border: 1px solid transparent;
  box-shadow: 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  font-size: 13px;
  padding: 0.8em;
  display: inline-block;
  font-weight: normal;
  position: relative;
  outline: none;
  line-height: calc(15 / 13);
  cursor: pointer;
  border-radius: 3px;
`;

export const MoreInfoWrap = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 13px;
`;

export const LoginLink = styled.a`
  margin-left: 5px;
  color: hsl(206, 100%, 40%);
  font-size: 13px;
`;
export const ErrorText = styled.p`
  color: red;
  padding: 10px 0;
  font-size: 12px;
`;

export const TextInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  margin-top: 10px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  font-family: inherit;
  position: relative;
`;
