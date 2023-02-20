package com.seb10.server.domain.answer.dto;

import com.seb10.server.domain.answer.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class AnswerDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        private String contents;
    }
    @Getter
    @AllArgsConstructor
    public static class Patch{
        private long answerId;

        @NotBlank
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
        /* todo user, question 연결
        private User user;
        private Question question;
        private String getUserName(){return user.getUserName();}
         */


    }
}
