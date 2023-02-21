package com.seb10.server.domain.User.service;

import com.seb10.server.domain.User.entity.User;
import com.seb10.server.domain.User.repository.UserRepository;

import java.util.Optional;

public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        User createdUser = user;
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getUsername())
                .ifPresent(name -> findUser.setUsername());
        return updatedUser;
    }

    public User findUser(long userId) {
        User user =
                new User(userId, "홍길동","abc@gmail.com", "123456", createdAt);
        return user;
    }


    public User.UserStatus updateUserStatus(User.UserStatus userStatus) {
        return null;
    }
}
