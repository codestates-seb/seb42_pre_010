package com.seb10.server.domain.question.mapper;

import com.seb10.server.domain.question.dto.QuestionPostDto;
import com.seb10.server.domain.question.dto.QuestionResponseDto;
import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public class QuestionMapper {

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContents(questionPostDto.getContents());

        User user = new User();
        user.setUserId(questionPostDto.getUserId());
        question.setUser(user);

        return question;
    }

    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "user.username", target = "username")
    QuestionResponseDto questionToQuestionResponseDto(Question question);

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

}
