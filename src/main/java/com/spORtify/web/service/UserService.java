package com.spORtify.web.service;

import com.spORtify.data.entity.User;
import com.spORtify.web.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);

}
