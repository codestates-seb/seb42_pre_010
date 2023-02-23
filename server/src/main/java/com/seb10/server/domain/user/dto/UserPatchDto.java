package com.seb10.server.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class UserPatchDto {

    private long userId;

    @NotNull
    private String userName;

    @NotNull
    @Email
    private String email;

    @NotNull
    private String password;
}
