import styled from 'styled-components';

const QuestionList = styled.li`
  padding: 16px;
  border-bottom: 1px solid gray;
`;

const UserPic = styled.img`
  border-radius: 5px;
  width: 17px;
  height: 17px;
`;

const QuestionTitle = styled.h3`
  font-size: 17px;
  margin: 10px 0px;
`;

const QuestionContent = styled.div`
  font-size: 13px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0px;
`;

const UserName = styled.span`
  margin: 0px 10px;
`;

const Question = ({ questionData }) => {
  return (
    <QuestionList key={questionData.id}>
      <QuestionTitle>{questionData.title}</QuestionTitle>
      <QuestionContent>{questionData.content}</QuestionContent>
      <UserInfoContainer>
        <UserPic src={questionData.picture} alt="user-pics" />
        <UserName>{questionData.username}</UserName>
        <span>{questionData.createdAt}</span>
      </UserInfoContainer>
    </QuestionList>
  );
};

export default Question;
