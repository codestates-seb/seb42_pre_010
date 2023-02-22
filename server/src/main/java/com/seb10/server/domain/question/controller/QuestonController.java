package com.seb10.server.domain.question.controller;

import com.seb10.server.domain.question.dto.QuestionPostDto;
import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.question.service.QuestionService;
<<<<<<< HEAD
import com.seb10.server.domain.question.mapper.QuestionMapper;
=======
import com.seb10.server.dto.MultiResponseDto;
>>>>>>> 8d1200d40579072c7171c5613190da4deb7fd00f
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
@RequiredArgsConstructor
@Controller
public class QuestonController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    // 질문 등록
    @PostMapping("/")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto));

        return new ResponseEntity<>(questionMapper.questionPostDtoToQuestion(questionPostDto), HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive Long question_id,
                                        @Valid @RequestBody QuestionPostDto questionPostDto) {

    }

    // 질문 조회
    @GetMapping("/question/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id") @Positive long question_id) {
        Question question = questionService.findQuestion(question_id);

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    // 전체 질문 조회
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page, @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions), pageQuestions), HttpStatus.OK);
    }

    // 질문 삭제
    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive Long question_id) {
        questionService.deleteQuestion(question_id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}