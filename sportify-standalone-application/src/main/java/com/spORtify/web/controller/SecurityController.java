package com.spORtify.web.controller;

import com.spORtify.web.dto.LoginDto;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.service.security.UserSecurityService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import static com.spORtify.web.utilities.Constants.*;

@RestController(AUTHORIZATION_PATH)
@AllArgsConstructor
public class SecurityController {

    private UserSecurityService userSecurityService;

    @PostMapping(LOGIN_PATH)
    public String login(@RequestBody LoginDto loginDto) {
        return userSecurityService.loginUser(loginDto);
    }

    @PostMapping(REGISTRATION_SAVE_PATH)
    public String registerUser(@RequestBody UserDto userDto){
        return userSecurityService.createUser(userDto);
    }

    @PostMapping(LOGIN_CHANGE_PASSWORD_PATH)
    public String changePassword(@RequestBody LoginDto loginDto){
        return userSecurityService.updateUserPassword(loginDto);
    }

}
