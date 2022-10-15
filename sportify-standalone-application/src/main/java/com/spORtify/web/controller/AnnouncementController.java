package com.spORtify.web.controller;

import com.spORtify.data.entity.Announcement;
import com.spORtify.web.dto.AnnouncementDto;
import com.spORtify.web.service.announcement.AnnouncementService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import static com.spORtify.web.utilities.Constants.ANNOUNCEMENT_PATH;

@RestController
@AllArgsConstructor
public class AnnouncementController {

    private AnnouncementService announcementService;

    @PostMapping(ANNOUNCEMENT_PATH + "/add")
    public void addAnnouncement(@RequestBody AnnouncementDto announcement) {
        announcementService.addAnnouncement(announcement);
    }

    @DeleteMapping(ANNOUNCEMENT_PATH + "/delete/{id}")
    public void deleteAnnouncement(@PathVariable String id){
        announcementService.deleteAnnouncement(id);
    }

    @PutMapping(ANNOUNCEMENT_PATH + "{announcementToUpdateId}")
    public Announcement updateAnnouncement(@RequestBody AnnouncementDto announcementDto, @PathVariable String announcementToUpdateId) {
        return announcementService.updateAnnouncement(announcementToUpdateId,announcementDto);
    }

    @PostMapping(ANNOUNCEMENT_PATH + "/assign/{announcementId}/{userId}")
    public void assignParticipant(@PathVariable String announcementId, @PathVariable String userId){
        announcementService.assignParticipantToAnnouncement(announcementId, userId);
    }


}
