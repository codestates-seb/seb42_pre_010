package com.seb10.server.domain.User.mapstruct.mapper;

import com.seb10.server.domain.User.dto.UserPatchDto;
import com.seb10.server.domain.User.dto.UserPostDto;
import com.seb10.server.domain.User.dto.UserResponseDto;
import com.seb10.server.domain.User.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);

    User userPatchDtoToUser(UserPatchDto userPatchDto);

    UserResponseDto userToUserResponseDto(User user);
}
