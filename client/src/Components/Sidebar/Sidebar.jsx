import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  margin-left: 24px;
  float: right;
  color: #e7e9eb;
  font-size: 12px;
`;

const YellowBox = styled.ul`
  background-color: #474336;
  border: 1px solid #665c37;
  border-radius: 3px;
  list-style: none;
  color: #f2f2f3;
`;

const YellowBoxTitle = styled.li`
  background-color: #524c38;
  padding: 12px 15px;
`;

const YellowBoxContent = styled.li`
  margin: 12px 0;
  padding: 0 16px;
  display: flex;
  align-items: center;

  a {
    margin-left: 10px;
    text-decoration: none;
    color: #e7e9eb;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <YellowBox>
        <YellowBoxTitle>The Overflow Blog</YellowBoxTitle>
        <YellowBoxContent>
          <div>❤️</div>
          <a href="https://stackoverflow.blog/2023/02/15/serverless-scales-well-but-most-databases-dont/?cb=1&_ga=2.51384608.881258964.1676779248-1793096610.1666579764">
            Serverless scales well, but most databases don’t
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <div>❤️</div>
          <a href="https://stackoverflow.blog/2023/02/16/monitoring-debt-builds-up-faster-than-software-teams-can-pay-it-off/?cb=1&_ga=2.218053919.881258964.1676779248-1793096610.1666579764">
            Monitoring debt builds up faster than software teams can pay it off
          </a>
        </YellowBoxContent>
        <YellowBoxTitle>Featured on Meta</YellowBoxTitle>
        <YellowBoxContent>
          <div>❤️</div>
          <a href="https://meta.stackexchange.com/questions/386681/ticket-smash-for-status-review-tag-part-deux?cb=1">
            Ticket smash for [status-review] tag: Part Deux
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <div>❤️</div>
          <a href="https://meta.stackexchange.com/questions/386727/weve-added-a-necessary-cookies-only-option-to-the-cookie-consent-popup?cb=1">
            We ve added a `Necessary cookies only` option to the cookie consent
            popup
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <div>❤️</div>
          <a href="https://meta.stackoverflow.com/questions/423096/we-ve-made-changes-to-our-privacy-notice-for-collectives?cb=1">
            We’ve made changes to our Privacy Notice for Collectives™
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <div>❤️</div>
          <a href="https://meta.stackoverflow.com/questions/421831/temporary-policy-chatgpt-is-banned?cb=1">
            Temporary policy: ChatGPT is banned
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <div>❤️</div>
          <a href="https://meta.stackoverflow.com/questions/345643/the-amazon-tag-is-being-burninated?cb=1">
            The [amazon] tag is being burninated
          </a>
        </YellowBoxContent>
        <YellowBoxContent>
          <div>❤️</div>
          <a href="https://meta.stackoverflow.com/questions/423231/microsoft-azure-collective-launch-and-proposed-tag-changes?cb=1">
            Microsoft Azure Collective launch and proposed tag changes
          </a>
        </YellowBoxContent>
      </YellowBox>
    </SidebarContainer>
  );
};

export default Sidebar;
