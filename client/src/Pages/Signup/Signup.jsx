import styled from 'styled-components';

const SignupWrap = styled.div`
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

const SignupInfoSection = styled.div`
  width: 440px;
  font-size: 13px;
  .Sublink {
    color: gray;
  }
  .Subalink {
    color: rgba(51, 160, 255, 1);
  }
`;

const SignupInfoTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const SignupInfoContent = styled.div`
  font-size: 1rem;
  margin-bottom: 24px;
  display: flex;
`;

const InfoLogo = styled.div`
  margin-right: 8px;
  vertical-align: bottom;
  margin-top: -5px;
`;

const SignupFormSection = styled.div`
  width: 440px;
`;
const SignupSocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const SignupGoogle = styled.button`
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

const SignupGithub = styled(SignupGoogle)`
  background-color: #2f3338;
  color: white;
`;

const SignupFacebook = styled(SignupGithub)`
  background-color: #365499;
`;

const SignupInputWrap = styled.div`
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

const SignupInputBlock = styled.div`
  margin: 6px 0;
`;

const SignupInputTitle = styled.div`
  padding: 0 2px;
  font-weight: bold;
`;

const TextInput = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 0.6em 0.1em;
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

const Requisition = styled.p`
  color: hsl(210, 8%, 45%);
  font-size: 12px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

const TestBlock = styled.div`
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

const RecaptchaBox = styled.div`
  width: 164px;
  height: 144px;
`;

const OptionBlock = styled.div`
  display: flex;
  margin: 6px 0;
`;

const CheckBox = styled.input`
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

const OptionInfo = styled.label`
  line-height: 1rem;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  padding: 0 2px;
  color: hsl(210, 8%, 5%);
`;

const SignupSubmitBtn = styled.button`
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

const PolicyBlock = styled.div`
  line-height: 1rem;
  text-align: left;
  color: hsl(210, 8%, 45%);
  font-size: 12px;
  margin-top: 32px;
`;

const Signup = () => {
  return (
    <SignupWrap>
      <SignupInfoSection>
        <SignupInfoTitle>Join the Stack Overflow community</SignupInfoTitle>
        <SignupInfoContent>
          <InfoLogo>
            <svg width="26" height="26" className="svg-icon mtn2">
              <path
                opacity=".5"
                d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                fill="#8EC4FA"
              ></path>
              <path
                d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"
                fill="hsl(206,100%,52%)"
              ></path>
            </svg>
          </InfoLogo>
          Get unstuck — ask a question
        </SignupInfoContent>
        <SignupInfoContent>
          <InfoLogo>
            <svg width="26" height="26" className="svg-icon mtn2">
              <path
                d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"
                fill="hsl(206,100%,52%)"
              ></path>
              <path
                opacity=".5"
                d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                fill="hsl(206,100%,52%)"
              ></path>
            </svg>
          </InfoLogo>
          Unlock new privileges like voting and commenting
        </SignupInfoContent>
        <SignupInfoContent>
          <InfoLogo>
            <svg width="26" height="26" className="svg-icon mtn2">
              <path
                d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"
                fill="hsl(206,100%,52%)"
              ></path>
              <path
                opacity=".5"
                d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                fill="hsl(206,100%,52%)"
              ></path>
            </svg>
          </InfoLogo>
          Save your favorite tags, filters, and jobs
        </SignupInfoContent>
        <SignupInfoContent>
          <InfoLogo>
            <svg width="26" height="26" className="svg-icon mtn2">
              <path
                d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"
                fill="hsl(206,100%,52%)"
              ></path>
            </svg>
          </InfoLogo>
          Earn reputation and badges
        </SignupInfoContent>

        <span className="Sublink">
          Collaborate and share knowledge with a private group for FREE.
          <br></br>
        </span>
        <a
          href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up"
          className="Subalink"
        >
          Get Stack Overflow for Teams free for up to 50 users.
        </a>
      </SignupInfoSection>
      <SignupFormSection>
        <SignupSocialWrap>
          <SignupGoogle>
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
          </SignupGoogle>
          <SignupGithub>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"
                fill="#fff"
              ></path>
            </svg>
            <BtnText>Log in with GitHub</BtnText>
          </SignupGithub>
          <SignupFacebook>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
                fill="#fff"
              ></path>
            </svg>
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
            <TextInput />
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
            <RecaptchaBox>
              <iframe
                title="reCAPTCHA"
                src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Lfmm70ZAAAAADvPzM6OhZ8Adi40-78E-aYfc1ZS&amp;co=aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbTo0NDM.&amp;hl=en&amp;v=5qcenVbrhOy8zihcc2aHOWD4&amp;size=compact&amp;cb=3unij7lmwk0y"
                width="164"
                height="144"
                role="presentation"
                name="a-9911dfsh95jz"
                frameBorder="0"
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
              ></iframe>
            </RecaptchaBox>
          </TestBlock>
          <OptionBlock>
            <CheckBox type="checkbox" />
            <OptionInfo>
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </OptionInfo>
          </OptionBlock>
          <SignupSubmitBtn type="submit">Sign up</SignupSubmitBtn>
          <PolicyBlock>
            By clicking “Sign up”, you agree to our
            <a href="https://stackoverflow.com/legal/terms-of-service/public">
              terms of service
            </a>
            ,
            <a href="https://stackoverflow.com/legal/privacy-policy">
              privacy policy
            </a>
            and
            <a href="https://stackoverflow.com/legal/cookie-policy">
              cookie policy
            </a>
          </PolicyBlock>
        </SignupInputWrap>
      </SignupFormSection>
    </SignupWrap>
  );
};
export default Signup;
