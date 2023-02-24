package com.seb10.server.domain.user.service;

import com.seb10.server.domain.user.entity.User;
import com.seb10.server.domain.user.repository.UserRepository;
import com.seb10.server.exception.BusinessLogicException;
import com.seb10.server.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    // MemberRepository DI
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // (1) user 등록(회원 가입)
    public User createUser(User user) {
        // 이미 등록된 이메일인지 검증
        verifyExistsEmail(user.getEmail());

        // 회원 정보 저장
        return userRepository.save(user);
    }

    // (2) user 정보 수정
    public User updateUser(User user) {
        // 존재하는 회원인지 검증
        User findUser = findVerifiedUser(user.getUserId());

        // 유저이름 업데이트
        Optional.ofNullable(user.getUsername())
                .ifPresent(username -> findUser.setUsername(username));

        // 회원 정보 업데이트
        return userRepository.save(findUser);
    }

    // (3) user 정보 조회
    public User findUser(long userId) {

        return findVerifiedUser(userId);
    }

    // (4) user list 조회(userId 기준 정렬)
    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(
                PageRequest.of(page, size, Sort.by("userId").descending())
        );
    }

    // (5) 회원 탈퇴(특정 유저 상태 비활성화)
    public void deleteUser(long userId) {
        // user 찾기, user status 확인 및 변경
        User findUser = findVerifiedUser(userId);
        User.UserStatus status = findUser.getUserStatus();

        if (status != User.UserStatus.USER_DEACTIVATED) {
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
        }

        findUser.setUserStatus(User.UserStatus.USER_DEACTIVATED);
    }

    // (6) 이미 존재하는 유저인지 검증
    public User findVerifiedUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User findUser = optionalUser.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }

    // (7) 이미 등록된 이메일인지 검증
    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

}
