package com.seb10.server.domain.user.service;

import com.seb10.server.domain.user.entity.User;
import com.seb10.server.domain.user.repository.UserRepository;
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

        // 이름, 이메일, 유저 상태 업데이트
        Optional.ofNullable(user.getUsername())
                .ifPresent(name -> findUser.setUsername(username));
        Optional.ofNullable(user.getEmail())
                .isPresent(email -> findUser.setEmail(email));
        Optional.ofNullable(user.getUserStatus())
                .ifPresent(userStatus -> findUser.setUserStatus(userStatus));

        // 회원 정보 업데이트
        return userRepository.save(findUser);
    }

    // (3) user 정보 조회
    public User findUser(long userId) {

        return findVerifiedUser(userId);
    }

    // (4) user list 조회
    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(
                PageRequest.of(page, size, Sort.by("userId").descending())
        );
    }

    // (5) todo 회원 탈퇴(특정 유저 상태 비활성화)
//    public User.UserStatus updateUserStatus(User.UserStatus userStatus) {
//        return null;
//    }
}
