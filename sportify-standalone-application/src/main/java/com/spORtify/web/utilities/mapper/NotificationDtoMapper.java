package com.spORtify.web.utilities.mapper;

import com.spORtify.data.entity.Notification;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.NotificationDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class NotificationDtoMapper implements DtoMapper<Notification, NotificationDto>{

    private UserRepository userRepository;

    @Override
    public Notification mapDto(NotificationDto objectToMap) {
        var userId = Long.parseLong(objectToMap.getUserId());
        var user = userRepository.findUserByUserId(userId);

        var notification = new Notification();
        notification.setTitle(objectToMap.getTitle());
        notification.setImportanceLevel(objectToMap.getImportanceLevel());
        notification.setDescription(objectToMap.getDescription());
        notification.setUser(user);

        return notification;
    }
}
