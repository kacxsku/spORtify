package com.spORtify.web.service.announcement;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.repository.AnnouncementRepository;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class AnnouncementServiceImpl implements AnnouncementService{

    private AnnouncementRepository announcementRepository;
    @Override
    public List<Announcement> getAllAnnouncements() {
        return announcementRepository.findAll();
    }

    @Override
    public Announcement updateAnnouncement(Announcement announcement) {
        return null;
    }

    @Override
    public void deleteAnnouncement(String id) {
        var parsedId = Long.parseLong(id);
        announcementRepository.deleteByAnnouncementId(parsedId);
    }

    @Override
    public void addAnnouncement(Announcement announcement) {
        announcementRepository.save(announcement);
    }
}
