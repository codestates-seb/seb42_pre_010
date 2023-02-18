package com.seb10.server.domain.answer.service;

import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.answer.repository.AnswerRepository;
import com.seb10.server.exception.BusinessLogicException;
import com.seb10.server.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
//todo User
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {


        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer){
        //todo 등록된 유저인지 확인
        return answer;
    }

    //todo answer 찾기
    public Answer findAnswer(long answerId){

        return null;
    }

    //todo answer 모두 찾기
    public List<Answer> findAnswers(){
        return answerRepository.findAll();
    }

    //todo answer delete(status 변경)
    public void deleteAnswer(long answerId){

    }

    //todo answer 존재여부 확인
    public Answer verifyExistAnswer(long answerId){

        return null;
    }

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
