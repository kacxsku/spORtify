package com.spORtify.web.service.userNotification;

import com.spORtify.data.repository.NotificationRepository;
import com.spORtify.data.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserNotificationServiceImpl implements UserNotificationService{

    private NotificationRepository notificationRepository;
    private UserRepository userRepository;

    @Override
    public void deleteNotification(String userId, String notificationId) {
        var user = userRepository.findUserByUserId(Long.parseLong(userId));
        var notification = Long.parseLong(notificationId);

        notificationRepository.deleteNotificationByUserAndNotificationId(user, notification);
    }
}
