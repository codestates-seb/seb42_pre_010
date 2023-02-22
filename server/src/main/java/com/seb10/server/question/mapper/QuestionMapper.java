package com.seb10.server.question.mapper;

import com.seb10.server.question.dto.QuestionPostDto;
import com.seb10.server.question.entity.Question;
import com.seb10.server.question.repository.QuestionRepository;
import org.mapstruct.Mapper;

import java.util.List;


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
