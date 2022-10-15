package com.spORtify.web.service.announcement;

import com.spORtify.data.entity.Announcement;
import com.spORtify.web.dto.AnnouncementDto;

import java.util.List;


public interface AnnouncementService {
    List<Announcement> getAllAnnouncements();

    Announcement updateAnnouncement(String announcementToUpdateId,AnnouncementDto announcementDto);

    void deleteAnnouncement(String id);

    void addAnnouncement(AnnouncementDto announcement);

    void assignParticipantToAnnouncement(String announcementId,String userId);
}
