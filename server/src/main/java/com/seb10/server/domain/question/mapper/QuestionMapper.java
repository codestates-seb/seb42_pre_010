package com.seb10.server.domain.question.mapper;

import com.seb10.server.domain.question.dto.QuestionPostDto;
import com.seb10.server.domain.question.entity.Question;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public class QuestionMapper {

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
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

}
