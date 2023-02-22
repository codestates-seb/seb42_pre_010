package com.seb10.server.domain.question.entity;

// 질문의 상태
public enum QuestionStatus {
        QUESTION_SELECT("답변이 있는 질문"),
        QUESTION_NOSELECT("답변이 없는 질문"),
        QUESTION_DELETE("삭제된 질문");


        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
}
