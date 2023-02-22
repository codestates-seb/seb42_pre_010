package com.seb10.server.domain.user.mapstruct.mapper;

import com.seb10.server.domain.user.dto.UserPatchDto;
import com.seb10.server.domain.user.dto.UserPostDto;
import com.seb10.server.domain.user.dto.UserResponseDto;
import com.seb10.server.domain.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-21T13:19:50+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostDtoToUser(UserPostDto userPostDto) {
        if ( userPostDto == null ) {
            return null;
        }

        User user = new User();

        user.setUsername( userPostDto.getUsername() );
        user.setEmail( userPostDto.getEmail() );
        user.setPassword( userPostDto.getPassword() );

        return user;
    }

    @Override
    public User userPatchDtoToUser(UserPatchDto userPatchDto) {
        if ( userPatchDto == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( userPatchDto.getUserId() );
        user.setEmail( userPatchDto.getEmail() );
        user.setPassword( userPatchDto.getPassword() );

        return user;
    }

    @Override
    public UserResponseDto userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        return userResponseDto;
    }
}
