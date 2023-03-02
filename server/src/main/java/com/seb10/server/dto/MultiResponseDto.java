package com.seb10.server.dto;

import com.seb10.server.domain.answer.dto.AnswerDto;
import com.seb10.server.domain.question.dto.QuestionResponseDto;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> data;

    private QuestionResponseDto questionData;

    private List<AnswerDto.Response> answerData;

    private PageInfo pageInfo;

    public MultiResponseDto(List<T> data, Page page){
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }

    public MultiResponseDto(List<T> data){
        this.data = data;
    }

    // 특정 질문 GET 메서드, Dto 작성(API 명세서 참고)
    public MultiResponseDto(QuestionResponseDto questionData, List<AnswerDto.Response> answerData){
        this.questionData = questionData;
        this.answerData = answerData;
    }
}
