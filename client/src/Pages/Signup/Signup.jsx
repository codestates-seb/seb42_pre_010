import { useState } from 'react';
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
} from '../../Components/Signup/SignupStyle';

const Signup = () => {
  //const [nickname, setNickname] = useState('');
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
      setEmailMsg(`${email} is not a valid email address.`);
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
              <TextInput />
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
          <SignupSubmitBtn type="submit" disabled={!isAllValid}>
            Sign up
          </SignupSubmitBtn>
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
