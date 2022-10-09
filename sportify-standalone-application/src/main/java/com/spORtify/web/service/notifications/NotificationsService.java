package com.spORtify.web.service.notifications;

import com.spORtify.data.entity.Notification;
import com.spORtify.web.dto.NotificationDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NotificationsService {

    List<Notification> getAllUserNotifications(String userId);

    Notification createNotification(NotificationDto notificationDto);
}
