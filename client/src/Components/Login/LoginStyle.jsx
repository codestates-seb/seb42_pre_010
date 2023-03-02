import styled from 'styled-components';

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 855px;
  background-color: hsl(210, 8%, 95%);
  a {
    text-decoration: none;
  }
`;

export const LoginLogo = styled.div`
  margin-bottom: 24px;
`;

export const LogoImg = styled.img`
  width: 37px;
  height: 37px;
`;

export const LoginSocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const LoginGoogle = styled.button`
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

export const LoginGithub = styled(LoginGoogle)`
  background-color: #2f3338;
  color: white;
`;

export const LoginFacebook = styled(LoginGithub)`
  background-color: #365499;
`;

export const LoginInputWrap = styled.div`
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

export const LoginInputBlock = styled.div`
  margin: 10px 0;
`;

export const LoginInputTitle = styled.div`
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

export const LoginSubmitBtn = styled.button`
  margin: 10px 0;
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

export const SignupLink = styled.a`
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
  justify-content: flex-start;
  width: 300px;
  margin-top: 10px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  font-family: inherit;
  position: relative;
`;
