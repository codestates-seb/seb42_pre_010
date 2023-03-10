import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Pagination from '../../Components/Pagination';
import Question from '../../Components/Questions/Question';
import { AskButton } from '../../Components/Button/AskButton.jsx';
import { getAllQuestion } from '../../services/QuestionService';
import { Link } from 'react-router-dom';

const HomeBlock = styled.div`
  width: calc(100% - 324px);
  display: flex;
  flex-direction: column;
`;

const HomeQuestionsListBlock = styled.ul`
  display: flex;
  flex-direction: column;
  width: 718px;
  border-top: 1px solid #d6d9dc;
`;

const HomeTitle = styled.h1`
  font-size: 27px;
  padding-left: 24px;
  font: bold;
`;

const HomeTitleBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0 20px 0;
`;

const ButtonBlock = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const ButtonNav = styled.button`
  background-color: ${(props) =>
    props.value === props.currentTap ? '#e3e6e8' : 'white'};
  box-sizing: border-box;
  height: 100%;
  border: none;
  border-right: 1px solid gray;
  align-items: center;
  text-align: center;
  padding: 10px 15px;
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

const Home = ({ logged }) => {
  const [posts, setPosts] = useState([]);
  const [currentTap, setCurrentTap] = useState('year');
  const sortTap = ['Year', 'Month', 'Day'];

  useEffect(() => {
    const getData = async () => {
      const questionData = await getAllQuestion();
      setPosts(
        questionData.sort(
          (a, b) => a.createdAt.slice(0, 4) - b.createdAt.slice(0, 4)
        )
      );
    };
    getData();
  }, []);

  const onTapClick = (tabName) => {
    setCurrentTap(tabName.toLowerCase());

    if (tabName === 'Year') {
      setPosts(
        [...posts].sort(
          (a, b) => a.createdAt.slice(0, 4) - b.createdAt.slice(0, 4)
        )
      );
    } else if (tabName === 'Month') {
      setPosts(
        [...posts].sort(
          (a, b) => a.createdAt.slice(5, 7) - b.createdAt.slice(5, 7)
        )
      );
    } else if (tabName === 'Day') {
      setPosts(
        [...posts].sort(
          (a, b) => a.createdAt.slice(8, 10) - b.createdAt.slice(8, 10)
        )
      );
    }
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // ?????? ????????? ??????
  const postsPerPage = 5; // ??? ????????? ??? ???????????? ????????????
  const indexOfLastPost = currentPage * postsPerPage; // ???????????? ????????? ????????? ??????
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // ???????????? ????????? ????????? ??????
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // ???????????? ?????? ??????????????? Slice

  return (
    <HomeBlock>
      <HomeTitleBlock>
        <HomeTitle>All Questions</HomeTitle>
        <AskButton>
          <Link to={logged ? '/askquestions' : '/users/signup'}>
            Ask Question
          </Link>
        </AskButton>
      </HomeTitleBlock>
      <ButtonBlock>
        {sortTap.map((ele, idx) => {
          return (
            <ButtonNav
              onClick={() => onTapClick(ele)}
              value={ele.toLowerCase()}
              key={idx}
              currentTap={currentTap}
            >
              {ele}
            </ButtonNav>
          );
        })}
      </ButtonBlock>
      <HomeQuestionsListBlock>
        {currentPosts.map((ele) => {
          return (
            <Question
              questionData={ele}
              key={ele.questionId}
              currentTap={currentTap}
            />
          );
        })}
      </HomeQuestionsListBlock>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </HomeBlock>
  );
};

export default Home;
