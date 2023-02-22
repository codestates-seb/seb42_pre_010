package com.seb10.server.domain.question.dto;

import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.question.entity.QuestionStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class QuestionResponseDto {
    private long questionId;
    private long userId;
    private String username;
    private String title;
    private String contents;
    private QuestionStatus questionStatus;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
