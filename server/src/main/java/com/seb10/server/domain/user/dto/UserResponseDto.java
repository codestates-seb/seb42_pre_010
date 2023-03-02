package com.seb10.server.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
//@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
//
//    private long userId;
//    private String userName;
//    private String email;
//    private String password;
//    private String userStatus;
//
////    private long answerCount;
////    private long questionCount;

    private long userId;
    private String username;
    private LocalDateTime createdAt;
    private long questionCount;
    private long answerCount;
    //    private String password;


}
