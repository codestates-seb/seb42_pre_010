import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { WritingBodyForm } from '../../Components/AskForm/WritingForm';
import VotingBlock from '../../Components/Questions/VotingBlock';
import {
  DetailQuestionWrap,
  DetailQuestionTitleSection,
  AskBtnWrap,
  AskBtn,
  TimeInfoSection,
  TimeInfo,
  DetailQuestionAnswerSection,
  DetailQuestionContentWrap,
  QuestionMain,
  DetailQuestionContent,
  PostOwnerInfoWrap,
  PostOwnerInfo,
  AnswerSection,
  AnswerTitle,
  AnswerSub,
  PostAnswerBtn,
  PostAskTimeInfo,
  PostOwnerUser,
  DetailQuestionTitle,
} from '../../Components/Questions/DetailQuestionStyle';

import questionsData from '../../data/Questions';

const DetailQuestion = () => {
  return (
    <DetailQuestionWrap>
      <DetailQuestionTitleSection>
        <DetailQuestionTitle>{questionsData[0].title}</DetailQuestionTitle>
        <AskBtnWrap>
          <Link to="/askquestions">
            <AskBtn>Ask Question</AskBtn>
          </Link>
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
            <VotingBlock />
            <DetailQuestionContent>
              {questionsData[0].content}
            </DetailQuestionContent>
          </DetailQuestionContentWrap>
          <PostOwnerInfoWrap>
            <Link to={''}>Edit</Link>
            <PostOwnerInfo>
              <PostAskTimeInfo>asked 1 min ago</PostAskTimeInfo>
              <PostOwnerUser>
                <img src={questionsData[0].picture} alt={''} />
                <span>{questionsData[0].username}</span>
              </PostOwnerUser>
            </PostOwnerInfo>
          </PostOwnerInfoWrap>
        </QuestionMain>
        <Sidebar />
      </DetailQuestionAnswerSection>
      <AnswerSection>
        <AnswerTitle>Your Answer</AnswerTitle>
        <WritingBodyForm />
        <PostAnswerBtn>Post Your Answer</PostAnswerBtn>
        <Link to="/askquestions">
          <AnswerSub>Ask your own question.</AnswerSub>
        </Link>
      </AnswerSection>
    </DetailQuestionWrap>
  );
};

export default DetailQuestion;
