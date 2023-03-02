import styled from 'styled-components';
import smallLogo from '../../Logo/smallLogo.png';

const FooterBlock = styled.footer`
  display: flex;
  justify-content: space-around;
  height: 322px;
  background-color: #232629;
  padding: 32px 76px;
  margin: 0;
  color: #babfc4;
  font-size: 13px;
  flex-wrap: wrap;
`;

const FooterLogo = styled.div`
  display: flex;
  flex: 0 0 64px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const FooterNav = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
`;

const FooterNavBlock = styled.div`
  flex: 1 0 auto;
`;

const FooterTitle = styled.h4`
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
`;

const FooterContentsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 150px;
`;

const SocialMedia = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SocialMediaList = styled.li`
  margin: 0 5px 0 0;
  padding: 4px 0;
`;

const ContentsList = styled.li`
  margin: 0;
  padding: 4px 0;
`;

const products = ['Teams', 'Advertising', 'Collectives', 'Talent'];
const company = [
  'About',
  'Press',
  'Work Here',
  'Legal',
  'Privacy Policy',
  'Teams of Service',
  'Contact Us',
  'Cookie Settings',
  'Cookie Policy',
];
const network = [
  'Technology',
  'Culture & recreation',
  'Life & arts',
  'Science',
  'Professinal',
  'Business',
  'Api',
  'Data',
];

const sns = ['Blog', 'Facebook', 'Twitter', 'Linkedin', 'Instagram'];
const Footer = () => {
  return (
    <FooterBlock>
      <FooterLogo>
        <Logo src={smallLogo} />
      </FooterLogo>
      <FooterNav>
        <FooterNavBlock>
          <FooterTitle>STACK OVERFLOW</FooterTitle>
          <FooterContentsList>
            <ContentsList>Questions</ContentsList>
            <ContentsList>Help</ContentsList>
          </FooterContentsList>
        </FooterNavBlock>
        <FooterNavBlock>
          <FooterTitle>Products</FooterTitle>
          <FooterContentsList>
            {products.map((ele, idx) => {
              return <ContentsList key={idx}>{ele}</ContentsList>;
            })}
          </FooterContentsList>
        </FooterNavBlock>
        <FooterNavBlock>
          <FooterTitle>company</FooterTitle>
          <FooterContentsList>
            {company.map((ele, idx) => {
              return <ContentsList key={idx}>{ele}</ContentsList>;
            })}
          </FooterContentsList>
        </FooterNavBlock>
        <FooterNavBlock>
          <FooterTitle>Stack exchanges network</FooterTitle>
          <FooterContentsList>
            {network.map((ele, idx) => {
              return <ContentsList key={idx}>{ele}</ContentsList>;
            })}
          </FooterContentsList>
        </FooterNavBlock>
      </FooterNav>
      <FooterCopyright>
        <SocialMedia>
          {sns.map((ele, idx) => {
            return <SocialMediaList key={idx}>{ele}</SocialMediaList>;
          })}
        </SocialMedia>
        <p>
          Site design / logo © 2023 Stack Exchange Inc; user contributions
          licensed under
          <span>
            <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>
          </span>
          .<span> rev 2023.2.16.43246</span>
        </p>
      </FooterCopyright>
    </FooterBlock>
  );
};

export default Footer;
