package com.spORtify.web.controller;

import com.spORtify.web.dto.LoginDto;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.service.security.UserSecurityService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

import static com.spORtify.web.utilities.Constants.*;

@RestController(AUTHORIZATION_PATH)
@AllArgsConstructor
public class SecurityController {

    private UserSecurityService userSecurityService;

    @PostMapping(LOGIN_PATH)
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto, HttpServletResponse response) {
        try {
            userSecurityService.loginUser(loginDto);
            return ResponseEntity.status(HttpStatus.OK).body("logged");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Could not create user!");
        }
    }

    @PostMapping(REGISTRATION_SAVE_PATH)
    public ResponseEntity<String> registerUser(@RequestBody UserDto userDto){
        try {
            userSecurityService.createUser(userDto);
            return ResponseEntity.status(HttpStatus.CREATED).body("user created");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not create user!");
        }
    }

    @PostMapping(LOGIN_CHANGE_PASSWORD_PATH)
    public ResponseEntity<String> changePassword(@RequestBody LoginDto loginDto){
        try {
            userSecurityService.updateUserPassword(loginDto);
            return ResponseEntity.status(HttpStatus.OK).body("user created");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not create user!");
        }
    }

}
