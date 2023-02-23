import styled, { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1100px;
  padding: 24px 24px 24px 0px;
  height: 100%;
  justify-content: center;
`;

export const WithoutRootConent = styled.div`
  margin-top: 2px;
`;

export const Root = ({ logged }) => {
  return (
    <div>
      <Header logged={logged} />
      <MainContainer>
        <Nav />
        <Content>
          <Outlet />
          <Sidebar />
        </Content>
      </MainContainer>
      <Footer />
    </div>
  );
};

export const WithoutRoot = ({ logged }) => {
  return (
    <div>
      <Header logged={logged} />
      <WithoutRootConent>
        <Outlet />
      </WithoutRootConent>
    </div>
  );
};

export const WithoutSideBar = ({ logged }) => {
  return (
    <div>
      <Header logged={logged} />
      <MainContainer>
        <Nav />
        <Content>
          <Outlet />
        </Content>
      </MainContainer>
      <Footer />
    </div>
  );
};
