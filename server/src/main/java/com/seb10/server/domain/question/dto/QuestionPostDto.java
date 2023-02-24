package com.seb10.server.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@AllArgsConstructor
@Getter
public class QuestionPostDto {
    @Positive
    private long userId;
    @NotBlank(message = "제목을 입력해 주세요.")
    private String title;
    private String contents;

}
