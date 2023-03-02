package com.seb10.server.domain.answer.dto;

import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private long questionId;

        @NotNull
        private long userId;

        @NotBlank(message = "내용을 입력하세요.")
        private String contents;

        public void setQuestionId(long questionId){
            Assert.notNull(questionId, "question id must not be null.");
            this.questionId = questionId;
        }

        //포스트맨에서 answer POST 메서드 보낼때, 405 method not allowed 해결 코드
        public Post(){}
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
    @Setter
    public static class Response{
        private long answerId;
        private String contents;
        private Answer.AnswerStatus answerStatus;
        // user, question 연결
        private long userId;
        private long questionId;
        private String username;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    }
}
