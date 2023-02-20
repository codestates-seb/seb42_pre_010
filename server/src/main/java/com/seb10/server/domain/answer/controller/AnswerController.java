package com.seb10.server.domain.answer.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
public class AnswerController {
    @PostMapping
    public ResponseEntity postAnswer(){
        return null;
    }

    @GetMapping
    public ResponseEntity getAnswer(){
        return null;
    }

    @PatchMapping
    public ResponseEntity patchAnswer(){
        return null;
    }

    @PatchMapping
    public ResponseEntity deleteAnswer(){
        return null;
    }
}
