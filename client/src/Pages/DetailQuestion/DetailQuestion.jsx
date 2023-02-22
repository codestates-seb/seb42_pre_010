import styled from 'styled-components';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { WritingBodyForm } from '../../Components/AskForm/WritingForm';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa';
import { RxCountdownTimer } from 'react-icons/rx';

import questionsData from '../../data/Questions.js ';

const DetailQuestionWrap = styled.div`
  width: 1100px;
`;

const DetailQuestionTitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailQuestionTitle = styled.h1`
  max-width: 1080px;
  color: #3b4045;
  font-size: 27px;
  flex: 1 auto;
  margin: 0 0 8px;
  height: 35px;
  margin-bottom: 0.8rem;
  word-break: break-all;
`;

const AskBtnWrap = styled.div``;

const AskBtn = styled.button`
  min-width: 103px;
  height: 38px;
  margin-left: 10px;
  border: 1px solid transparent;
  border-radius: 3px;
  white-space: nowrap;
  color: white;
  background-color: rgb(0, 137, 254);
  box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.5);

  &:hover {
    background-color: #0074cc;
  }
`;

const TimeInfoSection = styled.div`
  border-bottom: 1px solid;
  border-color: #3b404549;
  height: 3.4rem;
  padding-bottom: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  margin-bottom: 18px;
`;

const TimeInfo = styled.div`
  time {
    margin: 0 15px 0 6px;
    color: #232639;
  }
`;

const DetailQuestionAnswerSection = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;

const DetailQuestionContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
`;

const QuestionMain = styled.div`
  border: 1px solid pink;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const VotingWrap = styled.div`
  width: 60px;
  height: 200px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  fill: #bbbfc3;
`;

const VotingBtnBlock = styled.div`
  * {
    width: 36px;
    height: 36px;
    fill: rgb(187, 191, 195);
    pointer-events: none;
    cursor: pointer;
  }
  span {
    color: rgb(163, 167, 170);
    font-size: 21px;
  }
`;

const DetailQuestionContent = styled.div`
  width: 660px;
  height: auto;
  padding-right: 16px;
  line-height: 35px;
`;

const PostOwnerInfoWrap = styled.div`
  border: 1px solid black;
  width: 660px;
  height: 50px;
`;

const PostOwnerInfo = styled.div``;

const AnswerSection = styled.div`
  border: 1px solid purple;
  width: 700px;
`;

const AnswerTitle = styled.h2`
  margin: 19px;
  padding: 20px;
  font-size: 19px;
  font-weight: 400;
`;

const DetailQuestion = () => {
  return (
    <DetailQuestionWrap>
      <DetailQuestionTitleSection>
        <DetailQuestionTitle>
          How to assign the value from query snapshot to a variable and then add
          it to a list and then update to airbase
        </DetailQuestionTitle>
        <AskBtnWrap>
          <AskBtn>Ask Question</AskBtn>
        </AskBtnWrap>
      </DetailQuestionTitleSection>
      <TimeInfoSection>
        <TimeInfo>
          <span>Asked</span> <time>today</time>
        </TimeInfo>
        <TimeInfo>
          <span>Modified</span> <time>today</time>
        </TimeInfo>
        <TimeInfo>
          <span>Viewed</span> <time>2 times</time>
        </TimeInfo>
      </TimeInfoSection>
      <DetailQuestionAnswerSection>
        <QuestionMain>
          <DetailQuestionContentWrap>
            <VotingWrap>
              <VotingBtnBlock>
                <BiUpArrow />
              </VotingBtnBlock>
              <VotingBtnBlock>
                <span>0</span>
              </VotingBtnBlock>
              <VotingBtnBlock>
                <BiDownArrow />
              </VotingBtnBlock>
              <VotingBtnBlock>
                <FaRegBookmark />
              </VotingBtnBlock>
              <VotingBtnBlock>
                <RxCountdownTimer />
              </VotingBtnBlock>
            </VotingWrap>
            <DetailQuestionContent>
              {questionsData[0].content}
            </DetailQuestionContent>
          </DetailQuestionContentWrap>
          <PostOwnerInfoWrap>
            <span>Edit</span>
            <span>Edit</span>
            <span>Edit</span>
            <PostOwnerInfo>Wonpil</PostOwnerInfo>
          </PostOwnerInfoWrap>
        </QuestionMain>
        <Sidebar />
      </DetailQuestionAnswerSection>
      <AnswerSection>
        <AnswerTitle>Your Answer</AnswerTitle>
        <WritingBodyForm />
        <AskBtn>Post Your Answer</AskBtn>
        <AnswerTitle>Ask your own question.</AnswerTitle>
      </AnswerSection>
    </DetailQuestionWrap>
  );
};

export default DetailQuestion;
