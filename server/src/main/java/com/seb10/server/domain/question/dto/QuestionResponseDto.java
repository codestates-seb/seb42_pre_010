package com.seb10.server.domain.question.dto;

import com.seb10.server.domain.answer.dto.AnswerDto;
import com.seb10.server.domain.question.entity.QuestionStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {

    private long questionId;
    private long userId;
    private String username;
    private String title;
    private String contents;
    private QuestionStatus questionStatus;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private List<AnswerDto.Response> answers;
}
