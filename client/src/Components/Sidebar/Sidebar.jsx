import styled from 'styled-components';
import { FaPen, FaStackOverflow, FaCommentAlt } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  float: right;
  font-size: 12px;
  padding: 0px 15px;
  color: #656a6d;
`;

const YellowBox = styled.ul`
  background-color: #fdf7e2;
  border: 1px solid #efe8cd;
  border-radius: 3px;
  list-style: none;
`;

const YellowBoxTitle = styled.li`
  background-color: #fbf3d5;
  padding: 12px 15px;
  font-weight: bold;
`;

const YellowBoxContent = styled.li`
  margin: 12px 0;
  padding: 0 16px;
  display: flex;
  align-items: center;

  a {
    margin-left: 10px;
    text-decoration: none;
    color: #24272a;
  }
`;
const YellowBoxLogo = styled.div`
  width: 14px;
  height: 14px;
  color: #24272a;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  a {
    box-sizing: border-box;
  }

  img {
    margin-bottom: 20px;
    width: 100%;
  }
`;

// const FrontEndAd = styled.img``;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <YellowBox>
        <YellowBoxTitle>The Overflow Blog</YellowBoxTitle>
        <YellowBoxContent>
          <YellowBoxLogo>
            <FaPen />
          </YellowBoxLogo>
          <a href="https://stackoverflow.blog/2023/02/15/serverless-scales-well-but-most-databases-dont/?cb=1&_ga=2.51384608.881258964.1676779248-1793096610.1666579764">
            Serverless scales well, but most databases don’t
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <YellowBoxLogo>
            <FaPen />
          </YellowBoxLogo>
          <a href="https://stackoverflow.blog/2023/02/16/monitoring-debt-builds-up-faster-than-software-teams-can-pay-it-off/?cb=1&_ga=2.218053919.881258964.1676779248-1793096610.1666579764">
            Monitoring debt builds up faster than software teams can pay it off
          </a>
        </YellowBoxContent>
        <YellowBoxTitle>Featured on Meta</YellowBoxTitle>
        <YellowBoxContent>
          <YellowBoxLogo>
            <FaCommentAlt />
          </YellowBoxLogo>
          <a href="https://meta.stackexchange.com/questions/386681/ticket-smash-for-status-review-tag-part-deux?cb=1">
            Ticket smash for [status-review] tag: Part Deux
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <YellowBoxLogo>
            <FaCommentAlt />
          </YellowBoxLogo>
          <a href="https://meta.stackexchange.com/questions/386727/weve-added-a-necessary-cookies-only-option-to-the-cookie-consent-popup?cb=1">
            We ve added a `Necessary cookies only` option to the cookie consent
            popup
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <YellowBoxLogo>
            <FaStackOverflow />
          </YellowBoxLogo>
          <a href="https://meta.stackoverflow.com/questions/423096/we-ve-made-changes-to-our-privacy-notice-for-collectives?cb=1">
            We’ve made changes to our Privacy Notice for Collectives™
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <YellowBoxLogo>
            <FaStackOverflow />
          </YellowBoxLogo>
          <a href="https://meta.stackoverflow.com/questions/421831/temporary-policy-chatgpt-is-banned?cb=1">
            Temporary policy: ChatGPT is banned
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <YellowBoxLogo>
            <FaStackOverflow />
          </YellowBoxLogo>
          <a href="https://meta.stackoverflow.com/questions/345643/the-amazon-tag-is-being-burninated?cb=1">
            The [amazon] tag is being burninated
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <YellowBoxLogo>
            <FaStackOverflow />
          </YellowBoxLogo>
          <a href="https://meta.stackoverflow.com/questions/423231/microsoft-azure-collective-launch-and-proposed-tag-changes?cb=1">
            Microsoft Azure Collective launch and proposed tag changes
          </a>
        </YellowBoxContent>
      </YellowBox>
      <ImgContainer>
        <a
          href="https://www.codestates.com/course/backend-engineering?gclid=CjwKCAiA9NGfBhBvEiwAq5vSy0OU6g_8Hk9JUxNIQtxCY1YY7arVx8AjuIAeUMJGFGiIUvXb3reBAhoCIi0QAvD_BwE"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/back-end-ad.png" alt="ad" />
        </a>
        <a
          href="https://www.codestates.com/course/frontend-engineering?gclid=CjwKCAiA9NGfBhBvEiwAq5vSy9oHGo3edBcfJW50qzorSktTDIt6vdOT1ZkiAloGrdZRn5s-KFhFrBoCmf4QAvD_BwE"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/front-end-ad.png" alt="ad" />
        </a>
        <a
          href="https://dhlottery.co.kr/common.do?method=main"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/loopy.jpg" alt="ad" />
        </a>
      </ImgContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
