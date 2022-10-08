package com.spORtify.web.service.user;

import com.spORtify.data.entity.User;
import com.spORtify.web.dto.LoginDto;
import com.spORtify.web.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends UserDetailsService {

    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);

    User findUserById(Long id);

    String updatePrivateData(Long id);

    String updateUserPassword(LoginDto loginDto);

    String  loginUser(LoginDto loginDto);

    String createUser(UserDto userDto);
}
