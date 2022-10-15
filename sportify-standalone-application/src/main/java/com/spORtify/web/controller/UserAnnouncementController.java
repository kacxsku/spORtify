package com.spORtify.web.controller;

import com.spORtify.data.entity.Announcement;
import com.spORtify.web.service.userAnnouncement.UserAnnouncementService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.spORtify.web.utilities.Constants.ANNOUNCEMENTS_PATH;

@RestController
@AllArgsConstructor
public class UserAnnouncementController {

    private UserAnnouncementService userAnnouncementService;

    @PostMapping(ANNOUNCEMENTS_PATH + "/{creatorId}")
    public List<Announcement> getAllAnnouncementsForCreator(@PathVariable String creatorId){
        return userAnnouncementService.getAllAnnouncementsForCreator(creatorId);
    }

    @PostMapping(ANNOUNCEMENTS_PATH + "/{participantId}")
    public List<Announcement> getAllAnnouncementsForParticipant(@PathVariable String participantId){
        return userAnnouncementService.getAllAnnouncementsForParticipant(participantId);
    }

}
