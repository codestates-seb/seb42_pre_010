import {
  SocialGoogleSvg,
  SocialGithubSvg,
  SocialFacebookSvg,
} from '../../Components/Signup/SocialBtn';
import TalentLogin from '../../Components/Signup/TalentLogin';
import {
  LoginWrap,
  LoginLogo,
  LogoImg,
  LoginSocialWrap,
  LoginGoogle,
  BtnText,
  LoginGithub,
  LoginFacebook,
  LoginInputWrap,
  LoginInputBlock,
  LoginInputTitle,
  TextInput,
  LoginSubmitBtn,
  MoreInfoWrap,
  SignupLink,
} from '../../Components/Login/LoginStyle';

const REACT_APP_URL = 'http://localhost:3000';

const Login = () => {
  return (
    <LoginWrap>
      <LoginLogo>
        <LogoImg src={REACT_APP_URL + '/images/stackoverflow_small.png'} />
      </LoginLogo>
      <LoginSocialWrap>
        <LoginGoogle>
          <SocialGoogleSvg />
          <BtnText>Sign up with Google</BtnText>
        </LoginGoogle>
        <LoginGithub>
          <SocialGithubSvg />
          <BtnText>Log in with GitHub</BtnText>
        </LoginGithub>
        <LoginFacebook>
          <SocialFacebookSvg />
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
