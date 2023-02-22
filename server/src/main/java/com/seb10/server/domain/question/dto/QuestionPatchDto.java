package com.seb10.server.domain.question.dto;

import com.seb10.server.domain.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class QuestionPatchDto {

    @NotNull
    private Long question_id;
    private String title;
    private String contents;
    private Question.QuestionStatus questionStatus;

    public void setQuestion_id(Long question_id) {
        this.question_id = question_id;
    }
}
