package com.seb10.server.question.controller;

import com.seb10.server.question.dto.QuestionPostDto;
import com.seb10.server.question.entity.Question;
import com.seb10.server.question.repository.QuestionRepository;
import com.seb10.server.question.service.QuestionService;
import com.seb10.server.question.mapper.QuestionMapper;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

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

    // 질문 삭제
    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive Long question_id) {
        questionService.deleteQuestion(question_id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}