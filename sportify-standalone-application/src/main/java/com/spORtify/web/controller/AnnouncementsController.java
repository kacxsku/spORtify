package com.spORtify.web.controller;

import com.spORtify.data.entity.Announcement;
import com.spORtify.web.service.announcement.AnnouncementService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.spORtify.web.utilities.Constants.ANNOUNCEMENTS_PATH;

@RestController(ANNOUNCEMENTS_PATH)
@AllArgsConstructor
public class AnnouncementsController {

    private AnnouncementService announcementService;

    @PostMapping(ANNOUNCEMENTS_PATH)
    public List<Announcement> getAllAnnouncements() {
        return announcementService.getAllAnnouncements();
    }

}
