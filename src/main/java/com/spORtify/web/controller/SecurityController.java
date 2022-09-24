package com.spORtify.web.controller;

import com.spORtify.web.dto.UserDto;
import com.spORtify.web.service.UserService;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import static com.spORtify.web.utilities.Constants.*;

@RestController(BASE_PATH)
public class SecurityController {

    private UserService userService;

    @PostMapping(REGISTRATION_SAVE_PATH)
    public String registerUser(@RequestBody UserDto userDto){
        if (userService.findUserByEmail(userDto.getEmail()) == null) {
            userService.saveUser(userDto);
            return "User Created Successfully";
        }
        return "User already exists";
    }

    @PostMapping(LOGIN_PATH)
    public void login(String email, String password){
        var user = userService.findUserByEmailAndPassword(email, password);
    }

}
