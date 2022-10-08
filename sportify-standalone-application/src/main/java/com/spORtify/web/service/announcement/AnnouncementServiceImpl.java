package com.spORtify.web.service.announcement;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.entity.Coordinate;
import com.spORtify.data.repository.AnnouncementRepository;
import com.spORtify.data.repository.CoordinateRepository;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.AnnouncementDto;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class AnnouncementServiceImpl implements AnnouncementService{

    private AnnouncementRepository announcementRepository;

    private CoordinateRepository coordinateRepository;

    private UserRepository userRepository;
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
    public void addAnnouncement(AnnouncementDto announcementDto) {

        var coordinate = new Coordinate();
        coordinate.setLatitude(announcementDto.getCoordinate().getLatitude());
        coordinate.setLongitude(announcementDto.getCoordinate().getLongitude());
        var announcement = new Announcement();
        announcement.setCreator(announcementDto.getCreator());
        announcement.setContent(announcementDto.getContent());
        announcement.setTitle(announcementDto.getTitle());
        announcement.setSkills(announcementDto.getSkills());

        coordinateRepository.save(coordinate);
        announcementRepository.save(announcement);
    }

    @Override
    public void assignParticipantToAnnouncement(String announcementId, String userId) {
        var announcement = announcementRepository.getAnnouncementByAnnouncementId(Long.parseLong(announcementId));
        var participant = userRepository.findUserByUserId(Long.parseLong(userId));

        announcement.setParticipant(participant);
        announcementRepository.save(announcement);
    }


}