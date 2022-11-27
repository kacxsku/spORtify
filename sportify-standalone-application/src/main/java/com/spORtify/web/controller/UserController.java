package com.spORtify.web.controller;

import com.spORtify.data.entity.User;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import static com.spORtify.web.utilities.Constants.*;

@RestController
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping(USER_PATH + "/{id}")
    public User getUserData(@PathVariable String id){
        return userService.findUserById(id);
    }

    @PutMapping(USER_CHANGE_PRIVATE_DATA_PATH + "/{id}")
    public ResponseEntity<String> changeUserPrivateData(@PathVariable String id, @RequestBody UserDto userDto) {
        try {
            userService.updatePrivateData(userDto, id);
            return ResponseEntity.status(HttpStatus.OK).body("Successfully updated user");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not update!");
        }
    }

    @PostMapping(USER_CHANGE_PHOTO_PATH + "/{id}")
    public ResponseEntity<String> uploadUserPhoto(@PathVariable String id, @RequestParam("file")MultipartFile file) {
        try {
            userService.uploadPhoto(file,id);
            return ResponseEntity.status(HttpStatus.OK).body("Successfully updated photo");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not upload file!");
        }
    }

    @PutMapping(USER_CHANGE_DESCRIPTION_PATH + "/{id}")
    public ResponseEntity<String> changeDescription(@PathVariable String id, @RequestParam String description) {
        try{
            userService.changeDescription(id, description);
            return ResponseEntity.status(HttpStatus.OK).body("Description updated");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not update");
        }

    }

}
