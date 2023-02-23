package com.seb10.server.domain.answer.repository;

import com.seb10.server.domain.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
//    Optional<Answer> findByAnswer(long answerId);
}
