package com.seb10.server.auth.userDetails;

import com.seb10.server.auth.utils.CustomAuthorityUtils;
import com.seb10.server.domain.user.entity.User;
import com.seb10.server.domain.user.repository.UserRepository;
import com.seb10.server.exception.BusinessLogicException;
import com.seb10.server.exception.ExceptionCode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;


// USER ROLE DB에서 조회하여 Spring Security에게 Role 정보 제공
@Component
public class MemberDetailsService implements UserDetailsService {
    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;

    public MemberDetailsService(UserRepository userRepository, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.authorityUtils = authorityUtils;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        Optional<User> optionalUser = userRepository.findByEmail(email);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return new MemberDetails(findUser);
    }

    private final class MemberDetails extends User implements UserDetails {

        MemberDetails(User user){
            setUserId(user.getUserId());
            setEmail(user.getEmail());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }


        @Override
        public Collection<? extends GrantedAuthority> getAuthorities(){
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getEmail(){ return getEmail();}

        @Override
        public boolean isAccountNonExpired(){ return  true;}

        @Override
        public boolean isAccountNonLocked(){ return true;}

        @Override
        public boolean isCredentialsNonExpired(){ return true;}

        @Override
        public boolean isEnabled(){ return true;}
    }
}
