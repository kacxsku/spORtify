package com.spORtify.web.service.security;

import com.spORtify.web.dto.JwtRequestModel;
import com.spORtify.web.dto.UserDto;

public interface UserSecurityService {
    String createUser(UserDto userDto);
    String  loginUser(JwtRequestModel jwtRequestModel);

    String updateUserPassword(JwtRequestModel jwtRequestModel);

}
