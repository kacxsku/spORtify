package com.spORtify.web.controller;

import com.spORtify.data.entity.Notification;
import com.spORtify.web.dto.NotificationDto;
import com.spORtify.web.service.notifications.NotificationsService;
import com.spORtify.web.service.userNotification.UserNotificationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.spORtify.web.utilities.Constants.*;

@RestController
@AllArgsConstructor
public class NotificationsController {

    private NotificationsService notificationsService;
    private UserNotificationService userNotificationsService;

    @GetMapping(ALL_NOTIFICATIONS_PATH + "/{userId}")
    public List<Notification> getAllNotificationsForUSer(@PathVariable String userId){
        return notificationsService.getAllUserNotifications(userId);
    }

    @PostMapping(CREATE_NOTIFICATION_PATH + USER_PATH + "/{userId}")
    public Notification createNotification(@PathVariable String userId,@RequestBody NotificationDto notificationDto){
        return notificationsService.createNotification(notificationDto);
    }


    @DeleteMapping(DELETE_NOTIFICATION_PATH + "/{notificationId}"+ USER_PATH + "/{userId}")
    public String DeleteNotification(@PathVariable String userId, @PathVariable String notificationId){
        userNotificationsService.deleteNotification(userId, notificationId);
        return  "deleted";
    }

}
