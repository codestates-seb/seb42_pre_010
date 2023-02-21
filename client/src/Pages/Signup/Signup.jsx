import { useState } from 'react';
import TalentLogin from '../../Components/Signup/TalentLogin';
import { SignupInfo } from '../../Components/Signup/SignupInfo';
import SignupPolicy from '../../Components/Signup/SignupPolicy';
import Recaptcha from '../../Components/Signup/Recaptcha';
import {
  SocialGoogleSvg,
  SocialGithubSvg,
  SocialFacebookSvg,
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
} from '../../Components/Signup/SignupStyle';

const Signup = () => {
  const [email, setEmail] = useState('');

  //이메일 유효성 검사 함수
  // const validateEmail = (email) => {
  //   return email
  //     .toLowerCase()
  //     .match(
  //       /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  //     );
  // };

  //이메일
  const onChangeEmail = (e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);
    console.log(email);
  };

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
            <TextInput />
          </SignupInputBlock>
          <SignupInputBlock>
            <SignupInputTitle>Email</SignupInputTitle>
            <TextInput onChange={onChangeEmail} />
          </SignupInputBlock>
          <SignupInputBlock>
            <SignupInputTitle>Password</SignupInputTitle>
            <TextInput />
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
          <SignupSubmitBtn type="submit">Sign up</SignupSubmitBtn>
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
