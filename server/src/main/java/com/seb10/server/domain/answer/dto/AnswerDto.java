package com.seb10.server.domain.answer.dto;

import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;

public class AnswerDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private long questionId;

        @NotBlank(message = "내용을 입력하세요.")
        private String contents;

        public void setQuestionId(long questionId){
            Assert.notNull(questionId, "question id must not be null.");
            this.questionId = questionId;
        }
    }
    @Getter
    @AllArgsConstructor
    public static class Patch{
        private long answerId;

        @NotBlank(message = "내용을 입력하세요.")
        private String contents;

        private Answer.AnswerStatus answerStatus;

        public void setAnswerId(long answerId){this.answerId = answerId;}
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long answerId;
        private String contents;
        private Answer.AnswerStatus answerStatus;
        // user, question 연결
        private long userId;
        private long questionId;
        private String userName;

    }
}
