package com.spORtify.web.service.announcement;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.repository.AnnouncementRepository;
import com.spORtify.data.repository.CoordinateRepository;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.AnnouncementDto;
import com.spORtify.web.utilities.mapper.AnnouncementDtoMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;


@Service
@AllArgsConstructor
public class AnnouncementServiceImpl implements AnnouncementService{

    private AnnouncementRepository announcementRepository;

    private CoordinateRepository coordinateRepository;

    private UserRepository userRepository;

    private AnnouncementDtoMapper announcementDtoMapper;
    @Override
    public List<Announcement> getAllAnnouncements() {
        return announcementRepository.findAll();
    }

    @Override
    public Announcement updateAnnouncement(String announcementToUpdateId, AnnouncementDto announcementDto) throws ParseException {
        var announcement = announcementDtoMapper.mapDto(announcementDto);
        var id = Long.parseLong(announcementToUpdateId);

        return announcementRepository.save(updateAnnouncement(id, announcement));
    }

    @Override
    public void deleteAnnouncement(String id) {
        var parsedId = Long.parseLong(id);
        announcementRepository.deleteByAnnouncementId(parsedId);
    }

    @Override
    public void addAnnouncement(AnnouncementDto announcementDto) throws ParseException {
        var announcement = announcementDtoMapper.mapDto(announcementDto);

        coordinateRepository.save(announcement.getCoordinate());
        announcementRepository.save(announcement);
    }

    @Override
    public void assignParticipantToAnnouncement(String announcementId, String userId) {
        var announcement = announcementRepository.getAnnouncementByAnnouncementId(Long.parseLong(announcementId));
        var participant = userRepository.findUserByUserId(Long.parseLong(userId));

        announcement.setParticipant(participant);
        announcementRepository.save(announcement);
    }

    @Override
    public Announcement getAnnouncement(String announcementId) {
        var id = Long.parseLong(announcementId);
        return announcementRepository.getAnnouncementByAnnouncementId(id);
    }



    private Announcement updateAnnouncement(Long  announcementId, Announcement newAnnouncement){
        var announcementToUpdate = announcementRepository.getAnnouncementByAnnouncementId(announcementId);

        announcementToUpdate.setSkills(newAnnouncement.getSkills());
        announcementToUpdate.setTitle(newAnnouncement.getTitle());
        announcementToUpdate.setContent(newAnnouncement.getContent());
        return announcementToUpdate;
    }

}