import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TalentLogin from '../../Components/Signup/TalentLogin';
import { SignupInfo } from '../../Components/Signup/SignupInfo';
import SignupPolicy from '../../Components/Signup/SignupPolicy';
import Recaptcha from '../../Components/Signup/Recaptcha';
import {
  SocialGoogleSvg,
  SocialGithubSvg,
  SocialFacebookSvg,
  ErrorSvg,
} from '../../Components/Signup/SocialBtn';
import {
  SignupWrap,
  SignupInfoSection,
  SignupFormSection,
  SignupSocialWrap,
  SignupGoogle,
  BtnText,
  SignupGithub,
  SignupFacebook,
  SignupInputWrap,
  SignupInputBlock,
  SignupInputTitle,
  TextInput,
  Requisition,
  TestBlock,
  OptionBlock,
  CheckBox,
  OptionInfo,
  SignupSubmitBtn,
  MoreInfoWrap,
  LoginLink,
  TextInputWrap,
  ErrorText,
  SignupSubmitBtnWrap,
} from '../../Components/Signup/SignupStyle';

const Signup = ({ logged, setLogged, setCurrUser }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  const handleSubmit = () => {
    axios
      .post('/users/signup', {
        username: nickname,
        email: email,
        password: password,
      })
      .then((response) => {
        setLogged(!logged);
        setCurrUser(response.data);
      })
      .catch(() => {
        console.log('Error!');
      });

    localStorage.setItem('logged', 'true'); // 로컬 저장소에 로그인 여부 데이터 저장
  };

  // 닉네임이 받은 값이 null은 아니도록
  const vaildateNickname = (nickname) => {
    return nickname !== null;
  };

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

  // 닉네임
  const onChangeNkicname = (e) => {
    const currNickname = e.target.value;
    setNickname(currNickname);
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
  const isNickname = vaildateNickname(nickname);
  const isAllValid = isEmailValid && isPwdValid && isNickname;

  return (
    <SignupWrap>
      <SignupInfoSection>
        <SignupInfo />
      </SignupInfoSection>
      <SignupFormSection>
        <SignupSocialWrap>
          <SignupGoogle>
            <SocialGoogleSvg />
            <BtnText>Sign up with Google</BtnText>
          </SignupGoogle>
          <SignupGithub>
            <SocialGithubSvg />
            <BtnText>Log in with GitHub</BtnText>
          </SignupGithub>
          <SignupFacebook>
            <SocialFacebookSvg />
            <BtnText>Log in with Facebook</BtnText>
          </SignupFacebook>
        </SignupSocialWrap>
        <SignupInputWrap>
          <SignupInputBlock>
            <SignupInputTitle>Display name</SignupInputTitle>
            <TextInputWrap>
              <TextInput onChange={onChangeNkicname} />
            </TextInputWrap>
          </SignupInputBlock>
          <SignupInputBlock>
            <SignupInputTitle>Email</SignupInputTitle>
            <TextInputWrap>
              <TextInput onChange={onChangeEmail} />
              {email === '' ? null : isEmailValid ? null : <ErrorSvg />}
            </TextInputWrap>
          </SignupInputBlock>
          <ErrorText>{emailMsg}</ErrorText>
          <SignupInputBlock>
            <SignupInputTitle>Password</SignupInputTitle>
            <TextInputWrap>
              <TextInput onChange={onChangePassword} />
              {password === '' ? null : isPwdValid ? null : <ErrorSvg />}
            </TextInputWrap>
            <ErrorText>{passwordMsg}</ErrorText>
            <Requisition>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </Requisition>
          </SignupInputBlock>
          <TestBlock>
            <Recaptcha />
          </TestBlock>
          <OptionBlock>
            <CheckBox type="checkbox" />
            <OptionInfo>
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </OptionInfo>
          </OptionBlock>
          <SignupSubmitBtnWrap>
            <Link to="/">
              <SignupSubmitBtn
                onClick={handleSubmit}
                type="submit"
                disabled={!isAllValid}
              >
                Sign up
              </SignupSubmitBtn>
            </Link>
          </SignupSubmitBtnWrap>
          <SignupPolicy />
        </SignupInputWrap>
        <MoreInfoWrap>
          Don’t have an account?
          <LoginLink href="/login">Log in</LoginLink>
          <TalentLogin />
        </MoreInfoWrap>
      </SignupFormSection>
    </SignupWrap>
  );
};
export default Signup;
