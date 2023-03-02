package com.seb10.server.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.util.Assert;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserPatchDto {

    private long userId;

    @NotNull
    private String username;


    @NotNull
    private String password;



    public UserPatchDto addUserId(Long userId){
        Assert.notNull(userId, "user id must not be null.");
        this.userId = userId;

        return this;
    }

//        public UserPatchDto(){}
}
