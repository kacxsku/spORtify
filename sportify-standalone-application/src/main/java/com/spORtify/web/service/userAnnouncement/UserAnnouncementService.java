package com.spORtify.web.service.userAnnouncement;

import com.spORtify.data.entity.Announcement;

import java.util.List;

public interface UserAnnouncementService {

    List<Announcement> getAllAnnouncementsForCreator(String creatorId);

    List<Announcement> getAllAnnouncementsForParticipant(String participantId);
}
