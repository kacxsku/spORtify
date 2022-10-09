package com.spORtify.data.repository;

import com.spORtify.data.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findAllByUserUserId(Long userId);
}

