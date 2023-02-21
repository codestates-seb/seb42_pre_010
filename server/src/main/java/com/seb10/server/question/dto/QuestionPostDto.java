package com.seb10.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class QuestionPostDto {
    @Positive
    private Long user_id;
    private String title;
    private String contents;


}
