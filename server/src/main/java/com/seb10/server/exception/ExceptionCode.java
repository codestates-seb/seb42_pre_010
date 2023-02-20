package com.seb10.server.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND("User not found"),
    USER_EXISTS("User exists"),
    QUESTION_NOT_FOUND("Question not found"),
    QUESTION_CANNOT_CHANGE("This question already answered"),
    QUESTION_CANNOT_DELETE("This question already answered"),
    ANSWER_NOT_FOUND("Answer not found"),
    ANSWER_CANNOT_DELETED("Answer cannot delete");



    @Getter
    private String message;

    ExceptionCode(String message) {
        this.message = message;
    }
}
