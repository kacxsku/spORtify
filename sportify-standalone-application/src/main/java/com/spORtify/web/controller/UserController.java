package com.spORtify.web.controller;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.entity.User;
import com.spORtify.web.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.spORtify.web.utilities.Constants.USER_PATH;

@RestController(USER_PATH)
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public User getUserData(@PathVariable String id){
        return userService.findUserById(parseID(id));
    }

    @PutMapping("/change/private/{id}")
    public String changeUserPrivateData(@PathVariable String id) {
     return userService.updatePrivateData(parseID(id));
    }


    @PostMapping("/change/photo")
    public String changeUserPhoto() {
        return "";
    }


    public List<Announcement> getUserPreviousActivities(){
        return null;
    }

    public List<Announcement> getUserPreviousAnnouncements(){
        return null;
    }
    private Long parseID(String id){
        return Long.parseLong(id);
    }

}
