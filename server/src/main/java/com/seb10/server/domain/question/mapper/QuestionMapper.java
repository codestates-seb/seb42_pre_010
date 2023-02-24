package com.seb10.server.domain.question.mapper;

import com.seb10.server.domain.answer.dto.AnswerDto;
import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.question.dto.QuestionPatchDto;
import com.seb10.server.domain.question.dto.QuestionPostDto;
import com.seb10.server.domain.question.dto.QuestionResponseDto;
import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.user.entity.User;
import org.mapstruct.Mapper;


import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContents(questionPostDto.getContents());

        User user = new User();
        user.setUserId(questionPostDto.getUserId());
        question.setUser(user);

        return question;
    }

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

//    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
//        User user = question.getUser();
//        List<Answer> answers = question.getAnswers();
//
//        List<AnswerDto.Response> answerResponse  =
//                answers.stream().map(answer ->
//                        new AnswerDto.Response(answer.getAnswerId(),
//                                answer.getContents(),
////                                answer.getCreatedAt(),
////                                answer.getModifiedAt(),
//                                answer.getAnswerStatus())).collect(Collectors.toList());
//
//        return QuestionResponseDto.builder()
//                .questionId(question.getQuestionId())
//                .userId(question.getUser().getUserId())
//                .username(question.getUser().getUsername())
//                .title(question.getTitle())
//                .contents(question.getContents())
//                .questionStatus(question.getQuestionStatus())
//                .createdAt(question.getCreatedAt())
//                .modifiedAt(question.getModifiedAt())
//                .answers(answerResponse)
//                .build();
//    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question){
        if (question == null) {return null;}

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setUserId(question.getUser().getUserId());
        questionResponseDto.setUsername(question.getUser().getUsername());
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContents(question.getContents());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());

        List<Answer> answers = question.getAnswers();
        List<AnswerDto.Response> answerResponseList = answers.stream().map(answer -> {
            AnswerDto.Response answerResponse = new AnswerDto.Response();
            answerResponse.setAnswerId(answer.getAnswerId());
            answerResponse.setQuestionId(question.getQuestionId());
            answerResponse.setUserId(answer.getUser().getUserId());
            answerResponse.setContents(answer.getContents());
            answerResponse.setUsername(answer.getUser().getUsername());
            answerResponse.setCreatedAt(answer.getCreatedAt());
            answerResponse.setModifiedAt(answer.getModifiedAt());
            return answerResponse;
        }).collect(Collectors.toList());

        questionResponseDto.setAnswers(answerResponseList);

        return questionResponseDto;
    }

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

}
