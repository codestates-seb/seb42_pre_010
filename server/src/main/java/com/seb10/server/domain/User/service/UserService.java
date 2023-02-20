package com.seb10.server.domain.User.service;

import com.seb10.server.domain.User.entity.User;

public class UserService {
    public User createUser(User user) {
        User createdUser = user;
        return createdUser;
    }

    public User updateUser(User user) {
        User updatedUser = user;
        return updatedUser;
    }

    public User findUser(long userId) {
        User user =
                new User(userId, "홍길동","abc@gmail.com", "123456");
        return user;
    }

//    public UserStatus updateUserStatus(UserStatus userStatus) {
//        return null;
//    }
}
