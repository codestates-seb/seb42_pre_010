package com.seb10.server.domain.question.service;


import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    // 질문 생성
    public Question createQuestion(Question question) {
        verifyQuestion(question);
        Question savedQuestion = saveQuestion(question);

        return savedQuestion;
    }

    // 질문 수정
    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestion_id());

    }

    public Question findQuestion(long question_id) {

        return findVerifiedQuestion(question_id);
    }

    public Page<Question> findQuestions(int page, int size) {

        return questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("question_id").descending()));
    }

    // 질문 삭제
    public void deleteQuestion(Long question_id) {
        Question question = findVerifiedQuestion(question_id);
        String status = question.getQuestionStatus().getStatus();
        // 답변이 있는 질문 일때
        if (status.equals("답변이 있는 질문"))
            throw new BusinessLogicException(ExceptionCode.QUESTION_CANNOT_DELETE);
        question.setQuestionStatus(Question.QuestionStatus.QUESTION_DELETE);
        questionRepository.save(question);
    }

    public Question findVerifiedQuestion(Long question_id) {
        Optional<Question> optionalQuestion = questionRepository.findById(question_id);
        String status = optionalQuestion.get().getQuestionStatus().getStatus();
//        // 이미 삭제된 질문 일때
//        if (status.equals("삭제된 질문"))
//            throw new BusinessLogicException(ExceptionCode.QUESTION_ALREADY_DELETE);
        Question findQuestion =
                optionalQuestion.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    private void verifyQuestion(Question question) {
        // 회원 확인
        userService.findVerifiedUser(question.getUser().getUser_id);
    }

    private Question saveQuestion(Question question) {

        return questionRepository.save(question);
    }

}
