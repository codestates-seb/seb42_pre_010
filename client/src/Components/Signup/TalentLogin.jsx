import styled from 'styled-components';

const TalentLoginWrap = styled.div`
  margin-top: 12px;
  a {
    font-size: 12px;
    color: hsl(206, 100%, 40%);
    font-size: 13px;
  }
`;

const TalentLogin = () => {
  return (
    <TalentLoginWrap>
      Are you an employer?
      <a href="https://careers.stackoverflow.com/employer/login" name="talent">
        Sign up on Talent
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
          <path
            d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"
            fill="#2e70b3"
          ></path>
        </svg>
      </a>
    </TalentLoginWrap>
  );
};

export default TalentLogin;
