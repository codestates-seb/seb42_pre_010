package com.seb10.server.domain.question.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class QuestionPostDto {
    @Positive
    private long userId;
    private String title;
    private String contents;

}
