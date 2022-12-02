package com.spORtify.data.repository;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    void deleteByAnnouncementId(Long announcementId);
    Announcement getAnnouncementByAnnouncementId(Long announcementId);
    List<Announcement> getAnnouncementsByCreator(User user);
    List<Announcement> getAnnouncementsByParticipant(User user);

}