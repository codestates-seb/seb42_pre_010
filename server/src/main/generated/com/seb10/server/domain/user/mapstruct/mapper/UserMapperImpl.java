package com.seb10.server.domain.user.mapstruct.mapper;

import com.seb10.server.domain.user.dto.UserPatchDto;
import com.seb10.server.domain.user.dto.UserResponseDto;
import com.seb10.server.domain.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-25T04:05:25+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

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
    public List<UserResponseDto> usersToUserResponses(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserResponseDto> list = new ArrayList<UserResponseDto>( users.size() );
        for ( User user : users ) {
            list.add( userToUserResponseDto( user ) );
        }

        return list;
    }
}
