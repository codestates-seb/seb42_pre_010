import styled from 'styled-components';
import questionsData from '../Questions/QuestionsDummyData';
import Question from '../../Components/Questions/Question';

const HomeContainer = styled.div`
  width: calc(100% - 324px);
`;

const HomeQuestionsListContainer = styled.ul`
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitleContainer>
        <HomeTitle>All Questions</HomeTitle>
        <button>Ask Question</button>
      </HomeTitleContainer>
      <ButtonContainer>
        <button>Year</button>
        <button>Month</button>
        <button>Day</button>
      </ButtonContainer>
      <HomeQuestionsListContainer>
        {questionsData.map((ele) => {
          return <Question questionData={ele} key={ele.id} />;
        })}
      </HomeQuestionsListContainer>
    </HomeContainer>
  );
};

export default Home;
