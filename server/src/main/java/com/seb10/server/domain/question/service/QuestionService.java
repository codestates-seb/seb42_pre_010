package com.seb10.server.domain.question.service;


import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.question.entity.QuestionStatus;
import com.seb10.server.domain.question.repository.QuestionRepository;
import com.seb10.server.exception.BusinessLogicException;
import com.seb10.server.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        // 질문 상태 변경
        Optional.ofNullable(question.getQuestionStatus())
                .ifPresent(questionStatus -> findQuestion.setQuestionStatus(questionStatus));

        // 제목 수정
        Optional.ofNullable(question.getTitle())
                .ifPresent(questionTitle -> findQuestion.setTitle(questionTitle));

        // 본문 수정
        Optional.ofNullable(question.getContents())
                .ifPresent(questionContents -> findQuestion.setContents(questionContents));

        // 수정 시간 변경
        findQuestion.setModifiedAt(LocalDateTime.now());

        return saveQuestion(findQuestion);
    }

    public Question findQuestion(long questionId) {

        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) {

        return questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("questionId").descending()));
    }

    // 질문 삭제
    public void deleteQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);
        QuestionStatus status = question.getQuestionStatus();
        // 답변이 있는 질문 일때
        if (status.equals("답변이 있는 질문"))
            throw new BusinessLogicException(ExceptionCode.QUESTION_CANNOT_CHANGE);
        question.setQuestionStatus(QuestionStatus.QUESTION_DELETE);

        questionRepository.save(question);
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        QuestionStatus status = optionalQuestion.get().getQuestionStatus();
        // 이미 삭제된 질문 일때
        if (status.equals("삭제된 질문"))
            throw new BusinessLogicException(ExceptionCode.QUESTION_CANNOT_DELETE);
        Question findQuestion =
                optionalQuestion.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    private void verifyQuestion(Question question) {
        // 회원 확인
//        UserService.findVerifiedUser(question.getUser().getUserId);
    }

    private Question saveQuestion(Question question) {

        return questionRepository.save(question);
    }

}
