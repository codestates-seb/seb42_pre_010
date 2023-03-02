package com.seb10.server.domain.user.service;

import com.seb10.server.domain.user.dto.UserResponseDto;
import com.seb10.server.domain.user.entity.User;
import com.seb10.server.domain.user.mapstruct.mapper.UserMapper;
import com.seb10.server.domain.user.repository.UserRepository;
import com.seb10.server.exception.BusinessLogicException;
import com.seb10.server.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * PasswordEncoder DI - todo
 * create 메서드 수정 - todo
 * Question,AnswerCount 메서드 추가 - todo
 */
@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper mapper;
    private final PasswordEncoder passwordEncoder;

    // MemberRepository DI

    public UserService(UserRepository userRepository, UserMapper mapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.passwordEncoder = passwordEncoder;
    }


    // (1) user 등록(회원 가입)
    /**
     * 이미 등록된 이름인지 검증 - todo(optional)
     * passwordEncoder DI 받아서 패스워드 인코딩 해주기 - todo
     * 디폴트로 User Role 설정 - todo
     */
    public User createUser(User user) {
        // 이미 등록된 이메일인지 검증
        verifyExistsEmail(user.getEmail());

        //password 인코딩해서 데이터베이스에 보관
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        //회원가입시, 기본 role = user 로 설정
        List<String> roles = new ArrayList<>();
        roles.add("USER");
        user.setRoles(roles);

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
//        Optional.ofNullable(user.getEmail())
//                .ifPresent(email -> findUser.setEmail(email));
//        Optional.ofNullable(user.getUserStatus())
//                .ifPresent(userStatus -> findUser.setUserStatus(userStatus));

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
    public List<UserResponseDto> findAllUsers() {
        List<User> userList = userRepository.findAll();
        List<UserResponseDto> userResponseList = new ArrayList<>();
        for (User user : userList) {
            UserResponseDto userResponseDto = mapper.userToUserResponseDto(user);
            userResponseList.add(userResponseDto);
        }
        return userResponseList;
    }


    // (5) 회원 탈퇴(특정 유저 상태 비활성화)
    public void deleteUser(long userId) {
        // user 찾기, user status 확인 및 변경
        User findUser = findVerifiedUser(userId);
        User.UserStatus status = findUser.getUserStatus();

//        if (status != User.UserStatus.USER_DEACTIVATED) {
//            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
//        }

        findUser.setUserStatus(User.UserStatus.USER_DEACTIVATED);
        userRepository.save(findUser);
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

    // (8) 답변 카운트 증가
    public void updateAnswerCount(User user, long answerCount){
        user.setAnswerCount(answerCount + 1);
        userRepository.save(user);
    }

    // (9) 질문 카운트 증가
    public void updateQuestionCount(User user, long questionCount){
        user.setQuestionCount(questionCount + 1);
        userRepository.save(user);
    }
}
