package com.spORtify.web.service.security;

import com.spORtify.web.dto.LoginDto;
import com.spORtify.web.dto.UserDto;

public interface UserSecurityService {
    String createUser(UserDto userDto);
    String  loginUser(LoginDto loginDto);

    String updateUserPassword(LoginDto loginDto);

}
