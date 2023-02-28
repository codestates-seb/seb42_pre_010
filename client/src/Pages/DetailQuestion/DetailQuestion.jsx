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
} from '../../Components/Questions/DetailQuestionStyle';

const DetailQuestion = ({ questionList }) => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  console.log(questionList);

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
                    post?.userId % 2 ? 'men' : 'women'
                  }/${post?.userId}.jpg`}
                  alt="user-name"
                />
                <span>{post?.username}</span>
              </PostOwnerUser>
            </PostOwnerInfo>
          </PostOwnerInfoWrap>
        </QuestionMain>
        <SimpleSidebar />
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
