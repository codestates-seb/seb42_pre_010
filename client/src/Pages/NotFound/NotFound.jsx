import NotFoundImg from '../../Logo/404NotFound.jpg';
import styled from 'styled-components';

const NotFoundBlock = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    font-size: 40px;
    text-decoration: none;
    color: #0a95ff;
  }
`;

const ImgNotFound = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 15px;
`;

const NotFoundTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 10px;
`;

const NotFoundContent = styled.span`
  font-size: 50px;
  margin-bottom: 20px;
`;

const NotFound = () => {
  return (
    <NotFoundBlock>
      <ImgNotFound src={NotFoundImg} alt="404 Nout Found" />
      <NotFoundTitle>OOPS~</NotFoundTitle>
      <NotFoundContent>404 NOT FOUND</NotFoundContent>
      <a href="/">GO HOME</a>
    </NotFoundBlock>
  );
};

export default NotFound;
