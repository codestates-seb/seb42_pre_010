import styled from 'styled-components';
import questionsData from '../Questions/QuestionsDummyData';
import Question from '../../Components/Questions/Question';

const HomeContainer = styled.ul`
  border-top: 1px solid gray;
`;

const HomeTitle = styled.h1`
  font-size: 27px;
  font: bold;
`;

const HomeTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <div>
      <HomeTitleContainer>
        <HomeTitle>All Questions</HomeTitle>
        <button>Ask Question</button>
      </HomeTitleContainer>
      <HomeContainer>
        {questionsData.map((ele) => {
          return <Question questionData={ele} key={ele.id} />;
        })}
      </HomeContainer>
    </div>
  );
};

export default Home;
