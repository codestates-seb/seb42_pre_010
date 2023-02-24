package com.seb10.server.domain.user.mapstruct.mapper;

import com.seb10.server.domain.user.dto.UserPatchDto;
import com.seb10.server.domain.user.dto.UserPostDto;
import com.seb10.server.domain.user.dto.UserResponseDto;
import com.seb10.server.domain.user.entity.User;
import com.seb10.server.domain.user.dto.UserPatchDto;
import com.seb10.server.domain.user.dto.UserPostDto;
import com.seb10.server.domain.user.dto.UserResponseDto;
import com.seb10.server.domain.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
//    User userPostDtoToUser(UserPostDto userPostDto);

    default User userPostDtoToUser(UserPostDto userPostDto){
        if ( userPostDto == null ) {
            return null;
        }
        User user = new User();

        user.setEmail(userPostDto.getEmail());
        user.setUsername(userPostDto.getUsername());
        user.setPassword(userPostDto.getPassword());

        return user;
    }

    User userPatchDtoToUser(UserPatchDto userPatchDto);

//    UserResponseDto userToUserResponseDto(User user);

    List<UserResponseDto> usersToUserResponses(List<User> users);

    default UserResponseDto userToUserResponseDto(User user){
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setUserId(user.getUserId());
        userResponseDto.setUsername(user.getUsername());
        userResponseDto.setCreatedAt(user.getCreatedAt());
        userResponseDto.setQuestionCount(user.getQuestionCount());
        userResponseDto.setAnswerCount(user.getAnswerCount());

        return userResponseDto;
    }
}
