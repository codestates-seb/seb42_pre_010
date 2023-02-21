import styled from 'styled-components';

const UserPic = styled.img`
  border-radius: 5px;
  width: 17px;
  height: 17px;
`;

const QuestionTitle = styled.h3`
  font-size: 17px;
`;

const QuestionContent = styled.div`
  font-size: 13px;
`;

const Question = ({ questionData }) => {
  return (
    <li key={questionData.id}>
      <QuestionTitle>{questionData.title}</QuestionTitle>
      <QuestionContent>{questionData.content}</QuestionContent>
      <div>
        <UserPic src={questionData.picture} alt="user-pics" />
        <span>{questionData.username}</span>
        <span>{questionData.createdAt}</span>
      </div>
    </li>
  );
};

export default Question;
