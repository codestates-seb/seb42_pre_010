package com.seb10.server.domain.question.controller;

import com.seb10.server.domain.question.dto.QuestionPatchDto;
import com.seb10.server.domain.question.dto.QuestionPostDto;
import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.question.mapper.QuestionMapper;
import com.seb10.server.domain.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
@Validated
@RequiredArgsConstructor
@Controller
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    // 질문 등록
    @PostMapping("/")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto));

        return new ResponseEntity<>(questionMapper.questionPostDtoToQuestion(question), HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/posts/{question_id}/edit")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long question_id,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestion_id(question_id);
        Question question = questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity<>(questionMapper.questionPatchDtoToQuestion(question), HttpStatus.OK);
    }

    // 질문 삭제
    @PatchMapping("/question/{question_id}/{delete}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive long question_id,
                                         @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionService.deleteQuestion(question_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


//    @DeleteMapping("/question/{question_id}")
//    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive long question_id) {
//        questionService.deleteQuestion(question_id);
//
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

}