package com.spORtify.web.controller;

import com.spORtify.data.entity.Notification;
import com.spORtify.web.dto.NotificationDto;
import com.spORtify.web.service.notifications.NotificationsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.spORtify.web.utilities.Constants.ALL_NOTIFICATIONS_PATH;
import static com.spORtify.web.utilities.Constants.NOTIFICATIONS_PATH;

@RestController
@AllArgsConstructor
public class NotificationsController {

    private NotificationsService notificationsService;

    @GetMapping(ALL_NOTIFICATIONS_PATH + "/{userId}")
    public List<Notification> getAllNotificationsForUSer(@PathVariable String userId){
        return notificationsService.getAllUserNotifications(userId);
    }

    @GetMapping(NOTIFICATIONS_PATH)
    public Notification sendNotification(@RequestBody NotificationDto notificationDto){
        return notificationsService.createNotification(notificationDto);
    }

}
