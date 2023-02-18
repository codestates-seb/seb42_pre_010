package com.seb10.server.domain.answer.mapper;

import com.seb10.server.domain.answer.dto.AnswerDto;
import com.seb10.server.domain.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);
    AnswerDto.Response answerToAnswerResponse(Answer answer);
    List<AnswerDto.Response> answersToAnswerResponses(List<Answer> answers);
}
