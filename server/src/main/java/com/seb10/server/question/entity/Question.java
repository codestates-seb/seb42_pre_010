package com.seb10.server.question.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long question_id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false)
    private String contents;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false, length = 20)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_NOSELECT;

    @CreatedDate
    @Column(name = "question_created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "question_last_modified_at")
    private LocalDateTime modifiedAt;

    // USER와 연관관계 매핑
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;

    // 질문의 상태
    public enum QuestionStatus {
        QUESTION_SELECT("답변이 있는 질문"),
        QUESTION_NOSELECT("답변이 없는 질문"),
        QUESTION_DELETE("삭제된 질문");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }
}
