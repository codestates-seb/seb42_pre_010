import styled from 'styled-components';
import TalentLogin from '../../Components/Signup/TalentLogin';

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(210, 8%, 95%);
  a {
    text-decoration: none;
  }
`;

const LoginLogo = styled.div`
  margin-bottom: 24px;
`;

const LogoImg = styled.img`
  width: 37px;
  height: 37px;
`;

const LoginSocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const LoginGoogle = styled.button`
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

const BtnText = styled.span`
  margin-left: 5px;
`;

const LoginGithub = styled(LoginGoogle)`
  background-color: #2f3338;
  color: white;
`;

const LoginFacebook = styled(LoginGithub)`
  background-color: #365499;
`;

const LoginInputWrap = styled.div`
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

const LoginInputBlock = styled.div`
  margin: 10px 0;
`;

const LoginInputTitle = styled.div`
  padding: 0 2px;
  font-weight: bold;
`;

const TextInput = styled.input`
  width: 300px;
  margin-top: 10px;
  padding: 0.6em 0;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  font-family: inherit;
  position: relative;
  &:focus {
    outline: none;
  }
`;

const LoginSubmitBtn = styled.button`
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

const MoreInfoWrap = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 13px;
`;

const SignupLink = styled.a`
  margin-left: 5px;
  color: hsl(206, 100%, 40%);
  font-size: 13px;
`;

const Login = () => {
  return (
    <LoginWrap>
      <LoginLogo>
        <LogoImg src="images/stackoverflow_small.png" />
      </LoginLogo>
      <LoginSocialWrap>
        <LoginGoogle>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
              fill="#4285F4"
            ></path>
            <path
              d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
              fill="#34A853"
            ></path>
            <path
              d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
              fill="#FBBC05"
            ></path>
            <path
              d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
              fill="#EA4335"
            ></path>
          </svg>
          <BtnText>Sign up with Google</BtnText>
        </LoginGoogle>
        <LoginGithub>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"
              fill="#fff"
            ></path>
          </svg>
          <BtnText>Log in with GitHub</BtnText>
        </LoginGithub>
        <LoginFacebook>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
              fill="#fff"
            ></path>
          </svg>
          <BtnText>Log in with Facebook</BtnText>
        </LoginFacebook>
      </LoginSocialWrap>
      <LoginInputWrap>
        <LoginInputBlock>
          <LoginInputTitle>Email</LoginInputTitle>
          <TextInput />
        </LoginInputBlock>
        <LoginInputBlock>
          <LoginInputTitle>Password</LoginInputTitle>
          <TextInput />
        </LoginInputBlock>
        <LoginSubmitBtn type="submit">Log in</LoginSubmitBtn>
      </LoginInputWrap>
      <MoreInfoWrap>
        Don’t have an account?
        <SignupLink href="/signup">Sign up</SignupLink>
        <TalentLogin />
      </MoreInfoWrap>
    </LoginWrap>
  );
};

export default Login;
