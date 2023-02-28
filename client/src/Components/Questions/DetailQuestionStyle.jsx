import styled from 'styled-components';

export const DetailQuestionWrap = styled.div`
  width: 1100px;
`;

export const DetailQuestionTitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  width: 1035px;
`;

export const DetailQuestionTitle = styled.h1`
  max-width: 1080px;
  color: #3b4045;
  font-size: 27px;
  flex: 1 auto;
  margin: 10px 0 8px;
  height: 35px;
  margin-bottom: 0.8rem;
  word-break: break-all;
`;

export const AskBtnWrap = styled.div``;

export const AskBtn = styled.button`
  min-width: 103px;
  height: 38px;
  margin-left: 10px;
  border: 1px solid transparent;
  border-radius: 3px;
  white-space: nowrap;
  color: white;
  background-color: rgb(0, 137, 254);
  box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.5);
  cursor: pointer;
  &:hover {
    background-color: #0074cc;
  }
`;

export const TimeInfoSection = styled.div`
  border-bottom: 1px solid;
  border-color: hsl(210, 8%, 90%);
  height: 3.4rem;
  padding-bottom: 0.8rem;
  padding-left: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  margin-bottom: 18px;
  width: 1035px;
`;

export const TimeInfo = styled.div`
  margin-top: 10px;
  span {
    color: hsl(210, 8%, 45%);
  }
  time {
    margin: 0 15px 0 6px;
    color: #232639;
  }
`;

export const DetailQuestionAnswerSection = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;

export const DetailQuestionContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 720px;
`;

export const QuestionMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DetailQuestionContent = styled.div`
  width: 660px;
  height: auto;
  padding-right: 16px;
  line-height: 35px;
`;

export const PostOwnerInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 640px;
  margin-top: 50px;
  span {
    margin-right: 3px;
    font-size: 12px;
  }
  a {
    margin: 5px;
    text-decoration: none;
    color: hsl(210, 8%, 45%);
    font-size: 14px;
  }
`;

export const PostOwnerInfo = styled.div`
  background-color: hsl(205, 46%, 92%);
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 67px;
  padding: 10px;
  margin-right: 20px;
`;

export const AnswerSection = styled.div`
  width: 700px;
  a {
    text-decoration: none;
    color: hsl(206, 100%, 40%);
  }
`;

export const AnswerTitle = styled.h2`
  margin: 19px 0;
  padding: 20px 0;
  font-size: 19px;
  font-weight: 400;
`;

export const AnswerSub = styled.h3`
  margin: 19px 0;
  padding: 20px 0;
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
`;

export const PostAnswerBtn = styled(AskBtn)`
  margin-top: 15px;
  margin-left: 0 !important;
`;

export const PostAskTimeInfo = styled.span`
  margin-bottom: 10px;
  color: hsl(210, 8%, 45%);
`;

export const PostOwnerUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 45px;
  }
  span {
    margin-left: 10px;
    color: hsl(206, 100%, 40%);
    font-size: 13px;
    font-weight: 600px;
  }
`;

export const QuestionContentContainer = styled.div`
  margin-left: 19px;
`;

export const DivisionLine = styled.div`
  border-top: 1px solid hsl(210, 8%, 90%);
  margin-top: 50px;
`;
