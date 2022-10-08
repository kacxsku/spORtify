package com.spORtify.web.controller;

import com.spORtify.web.dto.LoginDto;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import static com.spORtify.web.utilities.Constants.*;

@RestController(BASE_PATH)
@AllArgsConstructor
public class SecurityController {

    private UserService userService;

    @PostMapping(LOGIN_PATH)
    public String login(@RequestBody LoginDto loginDto) {
        userService.loginUser(loginDto);
        return "login success";
    }

    @PostMapping(REGISTRATION_SAVE_PATH)
    public String registerUser(@RequestBody UserDto userDto){
        return userService.createUser(userDto);
    }

    @PostMapping(LOGIN_PATH + "/password/change")
    public String changePassword(@RequestBody LoginDto loginDto){
        return userService.updateUserPassword(loginDto);
    }

}
