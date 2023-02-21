import styled from 'styled-components';

const RecaptchaBox = styled.div`
  width: 164px;
  height: 144px;
`;

export const Recaptcha = () => {
  return (
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
  );
};

export default Recaptcha;
