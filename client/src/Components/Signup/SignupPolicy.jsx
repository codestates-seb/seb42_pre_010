import styled from 'styled-components';

export const SignupPolicy = () => {
  const PolicyBlock = styled.div`
    line-height: 1rem;
    text-align: left;
    color: hsl(210, 8%, 45%);
    font-size: 12px;
    margin-top: 32px;
  `;

  return (
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
      <a href="https://stackoverflow.com/legal/cookie-policy">cookie policy</a>
    </PolicyBlock>
  );
};
export default SignupPolicy;
