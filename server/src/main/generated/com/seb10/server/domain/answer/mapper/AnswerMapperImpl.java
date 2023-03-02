package com.seb10.server.domain.answer.mapper;

import com.seb10.server.domain.answer.dto.AnswerDto;
import com.seb10.server.domain.answer.entity.Answer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-24T23:46:54+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setContents( answerPostDto.getContents() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( answerPatchDto.getAnswerId() );
        answer.setContents( answerPatchDto.getContents() );
        answer.setAnswerStatus( answerPatchDto.getAnswerStatus() );

        return answer;
    }

    @Override
    public AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDto.Response response = new AnswerDto.Response();

        response.setAnswerId( answer.getAnswerId() );
        response.setContents( answer.getContents() );
        response.setAnswerStatus( answer.getAnswerStatus() );
        response.setCreatedAt( answer.getCreatedAt() );
        response.setModifiedAt( answer.getModifiedAt() );

        return response;
    }

    @Override
    public List<AnswerDto.Response> answersToAnswerResponses(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerDto.Response> list = new ArrayList<AnswerDto.Response>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponse( answer ) );
        }

        return list;
    }
}
