import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';
import Question from '../../Components/Questions/Question';
import { AskButton } from '../../Components/Button/AskButton';
import { getAllQuestion } from '../../services/QuestionService';

const QuestionsBlock = styled.div`
  width: calc(100% - 324px);
  display: flex;
  flex-direction: column;
`;

const QuestionsListBlock = styled.ul`
  border-top: 1px solid #d6d9dc;
  display: flex;
  flex-direction: column;
  width: 718px;
`;

const QuestionsTitle = styled.h1`
  font-size: 27px;
  padding-left: 24px;
  font: bold;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0 20px 0;
`;

const QuestionsLength = styled.span`
  display: flex;
  text-align: center;
`;

const QuestionsButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  margin-bottom: 16px;
`;

const QuestionsButtonNav = styled.button`
  background-color: ${(props) =>
    props.value === props.currentTap ? '#e3e6e8' : 'white'};
  box-sizing: border-box;
  height: 100%;
  border: none;
  border-right: 1px solid gray;
  align-items: center;
  text-align: center;
  padding: 15px;

  :first-child {
    border-left: 1px solid gray;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }

  :nth-child(2) {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }

  :last-child {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const Questions = ({ logged }) => {
  const [posts, setPosts] = useState([]);
  const [currentTap, setCurrentTap] = useState('newest');
  const questionsNavButton = ['Newest', 'Unanswered', 'Voted'];

  useEffect(() => {
    const getData = async () => {
      const questionData = await getAllQuestion();
      setPosts(questionData);
    };
    getData();
  }, []);

  const onTapClick = (tabName) => {
    setCurrentTap(tabName.toLowerCase());
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // ?????? ????????? ??????
  const postsPerPage = 5; // ??? ????????? ??? ???????????? ????????????
  const indexOfLastPost = currentPage * postsPerPage; // ???????????? ????????? ????????? ??????
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // ???????????? ????????? ????????? ??????
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // ???????????? ?????? ??????????????? Slice

  return (
    <QuestionsBlock>
      <TitleBlock>
        <QuestionsTitle>All Questions</QuestionsTitle>
        <AskButton>
          <Link to={logged ? '/askquestions' : '/users/signup'}>
            Ask Question
          </Link>
        </AskButton>
      </TitleBlock>
      <QuestionsButtonBlock>
        <QuestionsLength>{posts.length} questions</QuestionsLength>
        <div>
          {questionsNavButton.map((ele, idx) => {
            return (
              <QuestionsButtonNav
                key={idx}
                onClick={() => onTapClick(ele)}
                value={ele.toLowerCase()}
                currentTap={currentTap}
              >
                {ele}
              </QuestionsButtonNav>
            );
          })}
        </div>
      </QuestionsButtonBlock>
      <QuestionsListBlock>
        {currentPosts.map((ele) => {
          return <Question questionData={ele} key={ele.questionId} />;
        })}
      </QuestionsListBlock>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </QuestionsBlock>
  );
};

export default Questions;
