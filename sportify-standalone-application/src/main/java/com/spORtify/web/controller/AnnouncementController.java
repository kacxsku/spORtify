package com.spORtify.web.controller;

import com.spORtify.data.entity.Announcement;
import com.spORtify.web.dto.AnnouncementDto;
import com.spORtify.web.service.announcement.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.spORtify.web.utilities.Constants.ANNOUNCEMENTS_PATH;
import static com.spORtify.web.utilities.Constants.ANNOUNCEMENT_PATH;

@RestController
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    @PostMapping(ANNOUNCEMENT_PATH + "/add")
    public void addAnnouncement(@RequestBody AnnouncementDto announcement) {
        announcementService.addAnnouncement(announcement);
    }

    @DeleteMapping(ANNOUNCEMENT_PATH + "/delete/{id}")
    public void deleteAnnouncement(@PathVariable String id){
        announcementService.deleteAnnouncement(id);
    }

    @PutMapping(ANNOUNCEMENT_PATH)
    public Announcement updateAnnouncement(@RequestBody Announcement announcement) {
        return announcementService.updateAnnouncement(announcement);
    }
    @PostMapping(ANNOUNCEMENTS_PATH)
    public List<Announcement> getAllAnnouncements() {
        return announcementService.getAllAnnouncements();
    }

    @PostMapping(ANNOUNCEMENT_PATH + "/assign/{announcementId}/{userId}")
    public void assignParticipant(@PathVariable String announcementId, @PathVariable String userId){
        announcementService.assignParticipantToAnnouncement(announcementId, userId);
    }


}
