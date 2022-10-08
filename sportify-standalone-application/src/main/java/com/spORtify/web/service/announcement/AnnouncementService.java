package com.spORtify.web.service.announcement;

import com.spORtify.data.entity.Announcement;
import com.spORtify.web.dto.AnnouncementDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AnnouncementService {
    List<Announcement> getAllAnnouncements();

    Announcement updateAnnouncement(Announcement announcement);

    void deleteAnnouncement(String id);

    void addAnnouncement(AnnouncementDto announcement);

    void assignParticipantToAnnouncement(String announcementId,String userId);
}
