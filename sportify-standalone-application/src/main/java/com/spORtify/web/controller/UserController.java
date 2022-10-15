package com.spORtify.web.controller;

import com.spORtify.data.entity.User;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.service.user.UserService;
import lombok.AllArgsConstructor;
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
    public String changeUserPrivateData(@PathVariable String id, @RequestBody UserDto userDto) {
     return userService.updatePrivateData(userDto, id);
    }

    @PostMapping(USER_CHANGE_PHOTO_PATH + "/{id}")
    public String uploadUserPhoto(@PathVariable String id, @RequestParam("file")MultipartFile file) {
        try {
            userService.uploadPhoto(file,id);
            return "Successfully updated photo!";
        } catch (IOException e) {
            return "Could not upload file!";
        }
    }

    @PostMapping(USER_CHANGE_DESCRIPTION_PATH + "/{id}")
    public String changeDescription(@PathVariable String id, @RequestParam String description) {
        userService.changeDescription(id, description);
        return "ok";
    }

}
