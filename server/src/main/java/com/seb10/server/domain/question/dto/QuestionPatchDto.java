package com.seb10.server.domain.question.dto;

import com.seb10.server.domain.question.entity.QuestionStatus;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class QuestionPatchDto {

    @NotNull
    private long questionId;
    private String title;
    private String contents;
    private QuestionStatus questionStatus;

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }
}
