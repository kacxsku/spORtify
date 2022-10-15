package com.spORtify.web.controller;

import com.spORtify.data.entity.Announcement;
import com.spORtify.web.dto.AnnouncementDto;
import com.spORtify.web.service.announcement.AnnouncementService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.spORtify.web.utilities.Constants.ANNOUNCEMENT_PATH;

@RestController
@AllArgsConstructor
public class AnnouncementController {

    private AnnouncementService announcementService;

    @PostMapping(ANNOUNCEMENT_PATH + "/add")
    public ResponseEntity<String> addAnnouncement(@RequestBody AnnouncementDto announcement) {
        try {
            announcementService.addAnnouncement(announcement);
            return ResponseEntity.status(HttpStatus.CREATED).body("added announcement");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not add");
        }
    }

    @DeleteMapping(ANNOUNCEMENT_PATH + "/delete/{id}")
    public ResponseEntity<String> deleteAnnouncement(@PathVariable String id){
        try {
            announcementService.deleteAnnouncement(id);
            return ResponseEntity.status(HttpStatus.OK).body("deleted announcement");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not delete");
        }
    }

    @PutMapping(ANNOUNCEMENT_PATH + "/{announcementToUpdateId}")
    public Announcement updateAnnouncement(@RequestBody AnnouncementDto announcementDto, @PathVariable String announcementToUpdateId) {
        return announcementService.updateAnnouncement(announcementToUpdateId,announcementDto);
    }

    @PostMapping(ANNOUNCEMENT_PATH + "/assign/{announcementId}/{userId}")
    public ResponseEntity<String> assignParticipant(@PathVariable String announcementId, @PathVariable String userId){
        try {
            announcementService.assignParticipantToAnnouncement(announcementId, userId);
            return ResponseEntity.status(HttpStatus.OK).body("announcement assigned to user " + userId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not assign");
        }
    }


}
