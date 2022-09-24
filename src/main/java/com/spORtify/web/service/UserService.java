package com.spORtify.web.service;

import com.spORtify.data.entity.User;
import com.spORtify.web.dto.UserDto;

public interface UserService {

    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);

}
