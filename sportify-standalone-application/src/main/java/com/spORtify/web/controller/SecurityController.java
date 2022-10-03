package com.spORtify.web.controller;

import com.spORtify.web.dto.UserDto;
import com.spORtify.web.service.user.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import static com.spORtify.web.utilities.Constants.BASE_PATH;
import static com.spORtify.web.utilities.Constants.REGISTRATION_SAVE_PATH;

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

}
