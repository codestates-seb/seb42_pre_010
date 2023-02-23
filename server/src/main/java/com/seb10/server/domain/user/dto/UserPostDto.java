package com.seb10.server.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
public class UserPostDto {

    @NotNull
    private String username;

    @NotNull
    @Email
    private String email;

    @NotNull
    private String password;

}
