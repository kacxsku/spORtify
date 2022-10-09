package com.spORtify.web.service.user;

import com.spORtify.data.entity.User;
import com.spORtify.web.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

public interface UserService extends UserDetailsService {

    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);

    User findUserById(String id);

    String updatePrivateData(String id);




}
