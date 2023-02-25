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


    //포스트맨에서 question POST 메서드 보낼때, 405 method not allowed 해결 코드
    public QuestionPostDto(){}

}
