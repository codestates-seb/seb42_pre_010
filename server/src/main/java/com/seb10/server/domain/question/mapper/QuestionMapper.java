package com.seb10.server.domain.question.mapper;

import com.seb10.server.domain.answer.dto.AnswerDto;
import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.question.dto.QuestionPatchDto;
import com.seb10.server.domain.question.dto.QuestionPostDto;
import com.seb10.server.domain.question.dto.QuestionResponseDto;
import com.seb10.server.domain.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;


@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContents(questionPostDto.getContents());

//        User user = new User();
//        user.setUser_id(questionPostDto.getUser_id());
//        question.setUser(user);

        return question;
    }

//    public Question questionPostToQuestion(QuestionPostDto questionPostDto){
//
//          return new Question(0L,
//                  questionPostDto.getTitle(),
//                  questionPostDto.getContents(),
//                  );
//        return Question.builder()
//                .title(questionPostDto.getTitle())
//                .contents(questionPostDto.getContents())
//                .build();
//    }

//    @Mapping(source = )
    QuestionResponseDto questionToQuestionResponseDto(Question question);

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

}
