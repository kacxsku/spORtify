package com.spORtify.web.service.notifications;

import com.spORtify.data.entity.Notification;
import com.spORtify.data.repository.NotificationRepository;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.NotificationDto;
import com.spORtify.web.utilities.mapper.NotificationDtoMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NotificationsServiceImpl implements NotificationsService{

    private NotificationRepository notificationRepository;
    private NotificationDtoMapper notificationDtoMapper;

    private UserRepository userRepository;

    @Override
    public List<Notification> getAllUserNotifications(String userId) {
        var id = Long.parseLong(userId);

        return notificationRepository.findAllByUserUserId(id);
    }

    @Override
    public void createNotification(NotificationDto notificationDto) {
            notificationRepository.save(notificationDtoMapper.mapDto(notificationDto));
    }
}
