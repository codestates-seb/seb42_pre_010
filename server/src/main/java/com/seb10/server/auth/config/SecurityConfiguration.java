package com.seb10.server.auth.config;

import com.seb10.server.auth.filter.JwtAuthenticationFilter;
import com.seb10.server.auth.filter.JwtVerificationFilter;
import com.seb10.server.auth.handler.UserAccessDeniedHandler;
import com.seb10.server.auth.handler.UserAuthenticationEntryPoint;
import com.seb10.server.auth.handler.UserAuthenticationFailureHandler;
import com.seb10.server.auth.handler.UserAuthenticationSuccessHandler;
import com.seb10.server.auth.jwt.JwtTokenizer;
import com.seb10.server.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
//                .csrf().ignoringAntMatchers("/questions/ask")
//                .and()
                .cors(Customizer.withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
//                        .antMatchers(HttpMethod.POST,"/users/**").permitAll()
////                        .antMatchers(HttpMethod.POST,"/users/login").permitAll()
//                        .antMatchers(HttpMethod.GET,"/users/**").permitAll()
////                        .antMatchers(HttpMethod.POST, "/questions/**").hasRole("USER")
//                        .antMatchers(HttpMethod.POST, "/questions/**").permitAll()
//                        .antMatchers(HttpMethod.GET, "/questions/**").permitAll()
////                        .antMatchers(HttpMethod.PATCH,"/questions/**").hasRole("USER")
//                        .antMatchers(HttpMethod.PATCH,"/questions/**").permitAll()
//                        .antMatchers(HttpMethod.GET,"/users/*").hasRole("USER")
                        .anyRequest().permitAll());

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){ return PasswordEncoderFactories.createDelegatingPasswordEncoder();}



    // setAllowedOrigins() ????????? URL ??????
    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000",
                "http://junbofarm-s3-bucket.s3-website.ap-northeast-2.amazonaws.com/",
                "http://ec2-3-36-130-166.ap-northeast-2.compute.amazonaws.com:8080/"));
//        configuration.addAllowedOrigin("http://junbofarm-s3-bucket.s3-website.ap-northeast-2.amazonaws.com");
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.addExposedHeader("Authorization");
//        configuration.setExposedHeaders(List.of("*"));


        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    //todo CustomFilterConfigurer ?????? ?????? ??????
    //todo VerificationFilter ?????? : ?????? ????????? ????????? ???????????????
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity>{

        @Override
        public void configure(HttpSecurity builder) throws Exception{
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/users/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer,authorityUtils);

            builder
                    .addFilter(jwtAuthenticationFilter)
//                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class)
            ;
        }
    }
}
