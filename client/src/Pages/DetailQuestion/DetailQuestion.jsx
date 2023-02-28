import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import SimpleSidebar from '../../Components/Sidebar/SimpleSidebar';
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
  QuestionContentContainer,
  DivisionLine,
} from '../../Components/Questions/DetailQuestionStyle';

// 시간 계산 알고리즘
function ElapsedTime(date) {
  const start = new Date(date);
  const end = new Date();

  const diff = (end - start) / 1000;

  const times = [
    { name: 'years', milliSeconds: 60 * 60 * 24 * 365 },
    { name: 'months', milliSeconds: 60 * 60 * 24 * 30 },
    { name: 'mins', milliSeconds: 60 * 60 * 24 },
    { name: 'hours', milliSeconds: 60 * 60 },
    { name: 'mins', milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);
    if (betweenTime > 0) {
      return `${betweenTime} ${value.name} ago`;
    }
  }
  return 'Now';
}

const DetailQuestion = ({ questionList }) => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const filterdpost = questionList?.filter(
    (el) => String(el.questionId) === id
  )[0];
  useState(() => {
    setPost(filterdpost);
  });

  return (
    <DetailQuestionWrap>
      <DetailQuestionTitleSection>
        <DetailQuestionTitle>{post?.title}</DetailQuestionTitle>
        <AskBtnWrap>
          <Link to="/askquestions">
            <AskBtn>Ask Question</AskBtn>
          </Link>
        </AskBtnWrap>
      </DetailQuestionTitleSection>
      <TimeInfoSection>
        <TimeInfo>
          <span>Asked</span>
          <time dateTime={new Date(post?.createdAt)}>
            {ElapsedTime(post?.createdAt)}
          </time>
        </TimeInfo>
        <TimeInfo>
          <span>Modified</span>
          <time dateTime={new Date(post?.modifiedAt)}>
            {ElapsedTime(post?.modifiedAt)}
          </time>
        </TimeInfo>
        <TimeInfo>
          <span>Viewed</span> <time>2 times</time>
        </TimeInfo>
      </TimeInfoSection>
      <DetailQuestionAnswerSection>
        <QuestionContentContainer>
          <QuestionMain>
            <DetailQuestionContentWrap>
              <VotingBlock />
              <DetailQuestionContent>
                <ReactQuill
                  value={post?.contents}
                  readOnly={true}
                  theme={'bubble'}
                />
              </DetailQuestionContent>
            </DetailQuestionContentWrap>
            <PostOwnerInfoWrap>
              <Link to="/edit" state={{ data: post }}>
                Edit
              </Link>
              <PostOwnerInfo>
                <PostAskTimeInfo>asked 1 min ago</PostAskTimeInfo>
                <PostOwnerUser>
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      id % 2 ? 'men' : 'women'
                    }/${id}.jpg`}
                    alt="user-name"
                  />
                  <span>{post?.username}</span>
                </PostOwnerUser>
              </PostOwnerInfo>
            </PostOwnerInfoWrap>
          </QuestionMain>
          <AnswerSection>
            <DivisionLine />
            <AnswerTitle>Your Answer</AnswerTitle>
            <WritingBodyForm />
            <PostAnswerBtn>Post Your Answer</PostAnswerBtn>
            <Link to="/askquestions">
              <AnswerSub>Ask your own question.</AnswerSub>
            </Link>
          </AnswerSection>
        </QuestionContentContainer>
        <SimpleSidebar />
      </DetailQuestionAnswerSection>
    </DetailQuestionWrap>
  );
};

export default DetailQuestion;
