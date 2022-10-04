package com.spORtify.web.service.announcement;

import com.spORtify.data.entity.Announcement;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AnnouncementService {
    List<Announcement> getAllAnnouncements();

    Announcement updateAnnouncement(Announcement announcement);

    void deleteAnnouncement(String id);

    void addAnnouncement(Announcement announcement);
}
