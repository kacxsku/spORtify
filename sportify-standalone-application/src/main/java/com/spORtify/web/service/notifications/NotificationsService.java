package com.spORtify.web.service.notifications;

import com.spORtify.data.entity.Notification;
import com.spORtify.web.dto.NotificationDto;

import java.util.List;

public interface NotificationsService {

    List<Notification> getAllUserNotifications(String userId);

    Notification createNotification(NotificationDto notificationDto);

}
