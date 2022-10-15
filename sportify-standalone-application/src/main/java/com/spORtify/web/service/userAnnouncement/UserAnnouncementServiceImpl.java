package com.spORtify.web.service.userAnnouncement;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.repository.AnnouncementRepository;
import com.spORtify.data.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserAnnouncementServiceImpl implements UserAnnouncementService{

    private AnnouncementRepository announcementRepository;

    private UserRepository userRepository;

    @Override
    public List<Announcement> getAllAnnouncementsForCreator(String creatorId) {
        var creator = userRepository.findUserByUserId(Long.parseLong(creatorId));
        return announcementRepository.getAnnouncementsByCreator(creator);
    }

    @Override
    public List<Announcement> getAllAnnouncementsForParticipant(String participantId) {
        var participant = userRepository.findUserByUserId(Long.parseLong(participantId));

        return announcementRepository.getAnnouncementsByParticipant(participant);
    }
}
