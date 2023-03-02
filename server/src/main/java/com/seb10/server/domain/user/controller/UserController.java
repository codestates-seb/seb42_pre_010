package com.seb10.server.domain.user.controller;

import com.seb10.server.domain.user.dto.UserPatchDto;
import com.seb10.server.domain.user.dto.UserPostDto;

import com.seb10.server.domain.user.dto.UserResponseDto;
import com.seb10.server.domain.user.mapstruct.mapper.UserMapper;
import com.seb10.server.domain.user.service.UserService;
import com.seb10.server.domain.user.entity.User;
import com.seb10.server.dto.MultiResponseDto;
import com.seb10.server.dto.SingleResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

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

    // (1) user 등록(일반회원 가입)
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto requestBody) {

        User user = userService.createUser(mapper.userPostDtoToUser(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.CREATED);
    }

    // (2) user 정보 수정
    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(
            @PathVariable("user-id") @Positive long userId,
            @Valid @RequestBody UserPatchDto userPatchDto) {
//        userPatchDto.setUserId(userId);

        User updateUser = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto.addUserId(userId)));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(updateUser)), HttpStatus.OK);
    }

    // (3) user 정보 조회
    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId) {
        User response = userService.findUser(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(response)), HttpStatus.OK);
    }

    // (4) users 정보 리스트 조회
    @GetMapping
    public ResponseEntity getUsers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<User> pageUsers = userService.findUsers(page - 1, size);
        List<User> users = pageUsers.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.usersToUserResponses(users), pageUsers), HttpStatus.OK);
    }
//    @GetMapping
//    public ResponseEntity getAllUsers() {
//        List<UserResponseDto> userList = userService.findAllUsers();
//
//        return new ResponseEntity(userList, HttpStatus.OK);
//    }

    // (5) user 탈퇴(비활성화)
    @PatchMapping("/delete/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Positive long userId) {
        userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.OK);
    }



}
