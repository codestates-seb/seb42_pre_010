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

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        User user = question.getUser();
        List<Answer> answers = question.getAnswers();

        List<AnswerDto.Response> answerResponse  =
                answers.stream().map(answer ->
                        new AnswerDto.Response(answer.getAnswerId(),
                                answer.getContents(),
//                                answer.getCreatedAt(),
//                                answer.getModifiedAt(),
                                answer.getAnswerStatus())).collect(Collectors.toList());

        return QuestionResponseDto.builder()
                .questionId(question.getQuestionId())
                .userId(question.getUser().getUserId())
                .username(question.getUser().getUsername())
                .title(question.getTitle())
                .contents(question.getContents())
                .questionStatus(question.getQuestionStatus())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .answers(answerResponse)
                .build();
    }

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

}
