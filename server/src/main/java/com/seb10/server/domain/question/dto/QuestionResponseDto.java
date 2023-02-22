package com.seb10.server.domain.question.dto;

import com.seb10.server.domain.question.entity.Question;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class QuestionResponseDto {
    private long question_id;
    private long user_id;
    private String title;
    private String contents;
    private Question.QuestionStatus questionStatus;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
