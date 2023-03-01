import styled from 'styled-components';
import { Link } from 'react-router-dom';

const QuestionBlock = styled.div`
  display: flex;
  align-items: center;
  float: right;
  height: max-content;
  max-width: 900px;
  padding: 10px 16px 10px 30px;
  border-bottom: 1px solid #d6d9dc;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 10%;
    margin-right: 20px;
  }
  span {
    font-size: 13px;
    display: block;
    margin-bottom: 5px;
  }
`;

const QuestionList = styled.li`
  width: 90%;
`;

const UserPic = styled.img`
  border-radius: 5px;
  width: 17px;
  height: 17px;
`;

const QuestionTitle = styled.a`
  display: block;
  font-size: 17px;
  margin: 30px 0px 10px 0px;
  a {
    text-decoration: none;
    color: #4f93d2;
  }
`;

const QuestionContent = styled.div`
  font-size: 13px;
`;

const UserInfoBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0px;
  font-size: 12px;

  span {
    margin-bottom: 0px;
  }
`;

const UserName = styled.span`
  margin: 0px 5px;
`;

const Question = ({ questionData }) => {
  return (
    <QuestionBlock>
      <div>
        <span>{Math.floor(Math.random() * 100)} votes</span>
        <span>{Math.floor(Math.random() * 100)} answer</span>
        <span>{Math.floor(Math.random() * 100)} views</span>
      </div>
      <QuestionList>
        <QuestionTitle>
          <Link to={'/allquestion/' + questionData.questionId}>
            {questionData.title}
          </Link>
        </QuestionTitle>
        <QuestionContent>
          {questionData.contents.replace(/(<([^>]+)>)/gi, '')}
        </QuestionContent>
        <UserInfoBlock>
          <UserPic
            src={`https://randomuser.me/api/portraits/${
              questionData.questionId % 2 ? 'men' : 'women'
            }/${questionData.questionId}.jpg`}
            alt="user-name"
          />
          <UserName>{questionData.userName}</UserName>
          <span>{questionData.createdAt}</span>
        </UserInfoBlock>
      </QuestionList>
    </QuestionBlock>
  );
};

export default Question;
