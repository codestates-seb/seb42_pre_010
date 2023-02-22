package com.seb10.server.domain.answer.controller;

import com.seb10.server.domain.answer.dto.AnswerDto;
import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.answer.mapper.AnswerMapper;
import com.seb10.server.domain.answer.repository.AnswerRepository;
import com.seb10.server.domain.answer.service.AnswerService;
import com.seb10.server.dto.MultiResponseDto;
import com.seb10.server.dto.SingleResponseDto;
import com.seb10.server.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/question")
@Validated
public class AnswerController {
    private final static  String ANSWER_DEFAULT_URL = "/question";

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping("/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") @Positive long questionId,
                                     @Valid @RequestBody AnswerDto.Post answerPostDto){
        answerPostDto.setQuestionId(questionId);
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));
//        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL,answer.getAnswerId());
//
//        return ResponseEntity.created(location).build();
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(answer)),HttpStatus.CREATED);
    }

    //답변을 data로 감싸서 List로 출력
    @GetMapping("/{question-id}")
    public ResponseEntity getAnswers(@PathVariable("question-id") @Positive long questionId){

        List<Answer> answers = answerService.findAnswers();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.answersToAnswerResponses(answers)),HttpStatus.OK);
    }


    //todo service단에서 update 메서드 구현
    @PatchMapping("/post/{answer-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,

                                      @Valid @RequestBody AnswerDto.Patch answerPatchDto){
        answerPatchDto.setAnswerId(answerId);
        Answer answer =
                answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(answer)),
                HttpStatus.OK);
    }

    @PatchMapping("/{question-id}/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("question-id") @Positive long questionId,
                                       @PathVariable("answer-id") @Positive long answerId){
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
