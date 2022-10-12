package com.spORtify.web.security;

import com.spORtify.web.service.user.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import javax.annotation.Resource;

import static com.spORtify.web.utilities.Constants.*;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Resource
    private UserService userService;
    @Bean
    public static BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity security, BCryptPasswordEncoder passwordEncoder, UserDetailsService userDetailsService) throws Exception {
        return security.authenticationProvider(authProvider())
                .getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder)
                .and()
                .build();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity security) throws Exception {
        return security
                .authorizeRequests()
//                .antMatchers(BASE_PATH, HOME_PATH, REGISTRATION_PATH, LOGIN_PATH, LOGIN_CHANGE_PASSWORD_PATH).permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers("/**").authenticated()
                .and()
                .formLogin()
//                .loginPage(LOGIN_PATH)
                .permitAll()
                .and()
//                .loginProcessingUrl(LOGIN_PATH + "/process")
//                .defaultSuccessUrl(USER_PATH)
//                .failureUrl(LOGIN_PATH +"?error=true")
//                .permitAll()
//                .and()
//                .logout()
//                .logoutSuccessUrl("/logout" + "/process")
//                .invalidateHttpSession(true)
//                .deleteCookies("JSESSIONID")
//                .permitAll()
//                .and()
//                .csrf()
//                .disable()
//                .cors()
//                .disable()
                .build();
    }

}
