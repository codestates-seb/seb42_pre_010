package com.seb10.server.domain.answer.service;

import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.answer.repository.AnswerRepository;
import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.question.service.QuestionService;
import com.seb10.server.exception.BusinessLogicException;
import com.seb10.server.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
//todo User
@Service
public class AnswerService {

    //todo userRepository, questionRepository DI
    private final AnswerRepository answerRepository;
//    private final UserService userService;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
    }

    public Answer createAnswer(Answer answer){
        //todo 등록된 유저인지 확인


        //질문 찾기, 질문 상태 확인, 질문 상태 변경
        Question question = questionService.findVerifiedQuestion(answer.getQuestion().getQuestion_id());
        question.setQuestionStatus(Question.QuestionStatus.QUESTION_SELECT);
        answer.setQuestion(question);
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer){
        //todo 등록된 유저인지 확인, 질문 상태 확인

        //답변 존재 확인
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswerStatus())
                .ifPresent(answerStatus -> findAnswer.setAnswerStatus(answerStatus));

        findAnswer.setAnswerStatus(Answer.AnswerStatus.ANSWER_MODIFIED);

        return answerRepository.save(findAnswer);
    }

    // 존재하는 answer 찾기
    public Answer findAnswer(long answerId){
        return findVerifiedAnswer(answerId);
    }

    //answer 모두 찾기
    public List<Answer> findAnswers(){
        return answerRepository.findAll();
    }

    //answer delete(status 변경)
    public void deleteAnswer(long answerId){
        //todo answer 찾기, answer status 확인, answer status 변경
        Answer findAnswer = findVerifiedAnswer(answerId);
        Answer.AnswerStatus status = findAnswer.getAnswerStatus();

        if(status != Answer.AnswerStatus.ANSWER_DELETED){
            throw new BusinessLogicException(ExceptionCode.ANSWER_CANNOT_DELETED);
        }

        findAnswer.setAnswerStatus(Answer.AnswerStatus.ANSWER_DELETED);
    }

    //todo answer 존재여부 확인
//    public Answer verifyExistAnswer(long answerId){
//
//        return null;
//    }

    // answer 존재하지 않을 시, 오류 메시지 출력
    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }


}
