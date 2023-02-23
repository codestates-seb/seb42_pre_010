package com.seb10.server.domain.answer.entity;

import com.seb10.server.domain.question.entity.Question;
import com.seb10.server.domain.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "answer")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(nullable = false)
    private String contents;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();


    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;


    @Enumerated(EnumType.STRING)
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_NORMAL;


    public enum AnswerStatus{
        ANSWER_NORMAL("일반 상태"),
        ANSWER_MODIFIED("수정 상태"),
        ANSWER_DELETED("삭제 상태");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }
}
