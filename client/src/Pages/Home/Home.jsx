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

  button {
    padding: 10px;
    border: 1px solid gray;
  }

  .Home-first-button {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .Home-mid-button {
    border-radius: 0%;
  }

  .Home-third-button {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitleContainer>
        <HomeTitle>All Questions</HomeTitle>
        <button>Ask Question</button>
      </HomeTitleContainer>
      <ButtonContainer>
        <button className="Home-first-button">Year</button>
        <button className="Home-mid-button">Month</button>
        <button className="Home-third-button">Day</button>
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
