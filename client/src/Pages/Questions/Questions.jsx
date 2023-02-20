import questionsData from './QuestionsDummyData';
import Question from '../../Components/Questions/Question';

const Questions = () => {
  return (
    <div>
      <h1>All Questions</h1>
      <button>Ask Question</button>
      <ul>
        {questionsData.map((ele) => {
          return <Question questionData={ele} key={ele.id} />;
        })}
      </ul>
    </div>
  );
};

export default Questions;
