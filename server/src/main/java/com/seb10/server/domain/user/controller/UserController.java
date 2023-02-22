package com.seb10.server.domain.user.controller;

import com.seb10.server.domain.user.dto.UserPatchDto;
import com.seb10.server.domain.user.dto.UserPostDto;

import com.seb10.server.domain.user.mapstruct.mapper.UserMapper;
import com.seb10.server.domain.user.service.UserService;
import com.seb10.server.domain.user.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/users")
@Validated
public class UserController {

    private final UserService userService;
    private final UserMapper mapper;

    // UserMapper DI
    public UserController(UserService userService, UserMapper mapper){
        this.userService = userService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userDto) {

        User user = mapper.userPostDtoToUser(userDto);

        User response = userService.createUser(user);

        return new ResponseEntity<>(mapper.userToUserResponseDto(response),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(
            @PathVariable("user-id") @Positive long userId,
            @Valid @RequestBody UserPatchDto userPatchDto) {
        userPatchDto.setUserId(userId);

        User response = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));

        return new ResponseEntity<>(mapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(
            @PathVariable("user-id") @Positive long userId) {

        User response = userService.findUser(userId);
        return new ResponseEntity<>(mapper.userToUserResponseDto(response), HttpStatus.OK);
    }

//    @PatchMapping("/{user-status}")
//    public ResponseEntity patchUser(
//            @PathVariable("user-id") @Positive long userId,
//            @Valid @RequestBody UserStatusPatchDto userStatusPatchDto) {
//        userStatusPatchDto.setUserStatus(userStatus);
//
//        User user = new User();
//        user.setUserStatus(userStatusPatchDto.getUserStatus);
//
//        return new ResponseEntity<>(userStatusPatchDto, HttpStatus.NO_CONTENT);
//    }

}
