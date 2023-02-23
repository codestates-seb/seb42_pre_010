import { useState } from 'react';
import {
  SocialGoogleSvg,
  SocialGithubSvg,
  SocialFacebookSvg,
  ErrorSvg,
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
  ErrorText,
  TextInputWrap,
} from '../../Components/Login/LoginStyle';

const REACT_APP_URL = 'http://localhost:3000';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  // 이메일 정규 표현식
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      );
  };

  // 비밀번호 정규 표현식
  const validatePwd = (password) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  };

  // 이메일
  const onChangeEmail = (e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);

    if (!validateEmail(email)) {
      setEmailMsg(`${currEmail} is not a valid email address.`);
    } else {
      setEmailMsg('');
    }
  };

  // 비밀번호
  const onChangePassword = (e) => {
    const currPassword = e.target.value;
    setPassword(currPassword);

    if (!validatePwd(password)) {
      setPasswordMsg(
        `Please add one of the following things to make your password stronger:`
      );
    } else {
      setPasswordMsg('');
    }
  };

  // 유효성 검사를 통과하지 못하면 Submit 비활성화
  const isEmailValid = validateEmail(email);
  const isPwdValid = validatePwd(password);
  const isAllValid = isEmailValid && isPwdValid;

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
          <TextInputWrap>
            <TextInput onChange={onChangeEmail} />
            {email === '' ? null : isEmailValid ? null : <ErrorSvg />}
          </TextInputWrap>
        </LoginInputBlock>
        <ErrorText>{emailMsg}</ErrorText>
        <LoginInputBlock>
          <LoginInputTitle>Password</LoginInputTitle>
          <TextInputWrap>
            <TextInput onChange={onChangePassword} />
            {password === '' ? null : isPwdValid ? null : <ErrorSvg />}
          </TextInputWrap>
        </LoginInputBlock>
        <ErrorText>{passwordMsg}</ErrorText>
        <LoginSubmitBtn type="submit" disabled={!isAllValid}>
          Log in
        </LoginSubmitBtn>
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
