package com.seb10.server.question.dto;

import com.seb10.server.question.entity.Question;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class QuestionResponseDto {
    private Long question_id;
    private Long user_id;
    private String title;
    private String contents;
    private Question.QuestionStatus questionStatus;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
