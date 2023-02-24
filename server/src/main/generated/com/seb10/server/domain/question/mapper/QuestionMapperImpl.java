package com.seb10.server.domain.question.mapper;

import com.seb10.server.domain.answer.dto.AnswerDto;
import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.question.dto.QuestionPatchDto;
import com.seb10.server.domain.question.dto.QuestionResponseDto;
import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-24T11:28:42+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.questionId( questionPatchDto.getQuestionId() );
        question.title( questionPatchDto.getTitle() );
        question.contents( questionPatchDto.getContents() );
        question.questionStatus( questionPatchDto.getQuestionStatus() );

        return question.build();
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto.QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        Long userId = questionUserUserId( question );
        if ( userId != null ) {
            questionResponseDto.userId( userId );
        }
        questionResponseDto.username( questionUserUsername( question ) );
        questionResponseDto.questionId( question.getQuestionId() );
        questionResponseDto.title( question.getTitle() );
        questionResponseDto.contents( question.getContents() );
        questionResponseDto.questionStatus( question.getQuestionStatus() );
        questionResponseDto.createdAt( question.getCreatedAt() );
        questionResponseDto.modifiedAt( question.getModifiedAt() );
        questionResponseDto.answers( answerListToResponseList( question.getAnswers() ) );

        return questionResponseDto.build();
    }

    @Override
    public List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }

    private Long questionUserUserId(Question question) {
        if ( question == null ) {
            return null;
        }
        User user = question.getUser();
        if ( user == null ) {
            return null;
        }
        Long userId = user.getUserId();
        if ( userId == null ) {
            return null;
        }
        return userId;
    }

    private String questionUserUsername(Question question) {
        if ( question == null ) {
            return null;
        }
        User user = question.getUser();
        if ( user == null ) {
            return null;
        }
        String username = user.getUsername();
        if ( username == null ) {
            return null;
        }
        return username;
    }

    protected AnswerDto.Response answerToResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        long answerId = 0L;
        String contents = null;
        Answer.AnswerStatus answerStatus = null;

        answerId = answer.getAnswerId();
        contents = answer.getContents();
        answerStatus = answer.getAnswerStatus();

        long userId = 0L;
        long questionId = 0L;
        String userName = null;

        AnswerDto.Response response = new AnswerDto.Response( answerId, contents, answerStatus, userId, questionId, userName );

        return response;
    }

    protected List<AnswerDto.Response> answerListToResponseList(List<Answer> list) {
        if ( list == null ) {
            return null;
        }

        List<AnswerDto.Response> list1 = new ArrayList<AnswerDto.Response>( list.size() );
        for ( Answer answer : list ) {
            list1.add( answerToResponse( answer ) );
        }

        return list1;
    }
}
