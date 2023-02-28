import styled from 'styled-components';

const QuestionBlock = styled.div`
  display: flex;
  align-items: center;
  float: right;
  height: max-content;
  max-width: 900px;
  padding: 16px 16px 16px 40px;
  border-bottom: 1px solid #d6d9dc;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 13%;
    margin-right: 15px;
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
  margin: 10px 0px;
  text-decoration: none;
  color: #4f93d2;
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
  console.log(questionData);
  return (
    <QuestionBlock>
      <div>
        <span>0 votes</span>
        <span>5 answer</span>
        <span>5 views</span>
      </div>
      <QuestionList>
        <QuestionTitle href={'/allquestion/' + questionData.questionId}>
          {questionData.title}
        </QuestionTitle>
        <QuestionContent>{questionData.contents}</QuestionContent>
        <UserInfoBlock>
          <UserPic src={questionData.picture} alt="user-pics" />
          <UserName>{questionData.userName}</UserName>
          <span>{questionData.createdAt}</span>
        </UserInfoBlock>
      </QuestionList>
    </QuestionBlock>
  );
};

export default Question;
