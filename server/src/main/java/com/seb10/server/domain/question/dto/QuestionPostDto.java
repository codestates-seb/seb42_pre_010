package com.seb10.server.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class QuestionPostDto {
    @Positive
    private long user_id;
    private String title;
    private String contents;


}
