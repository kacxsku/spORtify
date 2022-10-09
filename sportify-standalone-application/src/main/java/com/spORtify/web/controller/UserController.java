package com.spORtify.web.controller;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.entity.User;
import com.spORtify.web.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.spORtify.web.utilities.Constants.*;

@RestController(USER_PATH)
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping("/{id}")
    public User getUserData(@PathVariable String id){
        return userService.findUserById(id);
    }

    @PutMapping(USER_CHANGE_PRIVATE_DATA_PATH + "/{id}")
    public String changeUserPrivateData(@PathVariable String id) {
     return userService.updatePrivateData(id);
    }


    @PostMapping(USER_CHANGE_PHOTO_PATH + "/{id}")
    public String changeUserPhoto(@PathVariable String id) {
        return "";
    }

    @PostMapping(USER_CHANGE_DESCRIPTION_PATH + "/{id}")
    public String changeDescription(@PathVariable String id) {
        return "";
    }

    public List<Announcement> getUserPreviousActivities(){
        return null;
    }

    public List<Announcement> getUserPreviousAnnouncements(){
        return null;
    }


}
