package com.spORtify.web.controller;

import com.spORtify.data.entity.Notification;
import com.spORtify.web.dto.NotificationDto;
import com.spORtify.web.service.notifications.NotificationsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.spORtify.web.utilities.Constants.*;

@RestController
@AllArgsConstructor
public class NotificationsController {

    private NotificationsService notificationsService;

    @GetMapping(ALL_NOTIFICATIONS_PATH + "/{userId}")
    public List<Notification> getAllNotificationsForUSer(@PathVariable String userId){
        return notificationsService.getAllUserNotifications(userId);
    }

    @PostMapping(NOTIFICATION_PATH)
    public void createNotification(@RequestBody NotificationDto notificationDto){
        notificationsService.createNotification(notificationDto);
    }

}
