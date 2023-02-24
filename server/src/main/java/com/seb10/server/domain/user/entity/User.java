package com.seb10.server.domain.user.entity;

import com.seb10.server.domain.answer.entity.Answer;
import com.seb10.server.domain.question.entity.Question;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(nullable = false,updatable = false)
    private String password;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();


    // 권한 부여를 위한 권한 테이블
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();


    // AnswerCount, QuestionCount 추가
    @Column(columnDefinition = "integer default 0", nullable = false)
    private long answerCount;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long questionCount;

//    // todo question, andswer 맵핑
//    @OneToMany(mappedBy = "user")
//    @JoinColumn(name = "QUESTION_ID")
//    private Question question;
//
//    @OneToMany(mappedBy = "user")
//    @JoinColumn(name = "ANSWER_ID")
//    private Answer answer;


    // question, answer 맵핑
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Answer> answers = new ArrayList<>();


    @Enumerated(EnumType.STRING)
    private User.UserStatus userStatus = User.UserStatus.USER_ACTIVE;


    public void setAnswerCount(long answerCount) {
        this.answerCount = answerCount;
    }

    public void setQuestionCount(long questionCount) {
        this.questionCount = questionCount;
    }


    public Long getUserId() {
        return userId;
    }


    public void setUserId(Long userId) {
        this.userId = userId;
    }


    public enum UserStatus {
        USER_ACTIVE("일반 상태"),
        USER_DEACTIVATED("탈퇴 상태");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
