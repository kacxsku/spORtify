package com.spORtify.data.repository;

import com.spORtify.data.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    void deleteByAnnouncementId(Long announcementId);

    Announcement getAnnouncementByAnnouncementId(Long announcementId);
}
