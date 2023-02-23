import styled from 'styled-components';
import { useState, useEffect } from 'react';
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
  margin-bottom: 20px;
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

const Questions = () => {
  const [posts, setPosts] = useState([]);
  const questionsNavButton = ['Newest', 'Unanswered', 'Voted'];
  const [currentTap, setCurrentTap] = useState('newest');

  useEffect(() => {
    const getData = async () => {
      const questionData = await getAllQuestion();
      setPosts(questionData);
    };
    getData();
  }, []);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 쪽수
  const [postsPerPage] = useState(5); // 한 페이지 당 보여지는 게시물수
  const page = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage; // 페이지의 마지막 게시물 위치
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 페이지의 첫번째 게시물 위치
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 보여져야 하는 게시물만큼 Slice

  // paginate
  const paginate = (pageNumber) => {
    if (pageNumber === 0) return;
    if (pageNumber > page) return;
    setCurrentPage(pageNumber);
  };

  const onTapClick = (tabName) => {
    setCurrentTap(tabName.toLowerCase());
    console.log(currentTap);
  };

  return (
    <QuestionsBlock>
      <TitleBlock>
        <QuestionsTitle>All Questions</QuestionsTitle>
        <AskButton>
          <a href="/askquestions">Ask Question</a>
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
        postPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </QuestionsBlock>
  );
};

export default Questions;
