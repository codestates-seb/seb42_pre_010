package com.seb10.server.domain.question.entity;

import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.user.entity.User;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
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
    private long questionId;

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

    // user 매핑
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;


    // answer 매핑
    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REFRESH})
    private List<Answer> answers = new ArrayList<>();

    public void setAnswer(Answer answer) {
        answers.add(answer);
        if (answer.getQuestion() != this) {
            answer.setQuestion(this);
        }
    }

}
