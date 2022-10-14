package com.spORtify.web.utilities.mapper;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.entity.Coordinate;
import com.spORtify.web.dto.AnnouncementDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class AnnouncementDtoMapper implements DtoMapper<Announcement, AnnouncementDto>{

    @Override
    public Announcement mapDto(AnnouncementDto objectToMap) {
        var announcement = new Announcement();
        var coordinate = new Coordinate();
        coordinate.setLatitude(objectToMap.getCoordinate().getLatitude());
        coordinate.setLongitude(objectToMap.getCoordinate().getLongitude());
        announcement.setCreator(objectToMap.getCreator());
        announcement.setContent(objectToMap.getContent());
        announcement.setTitle(objectToMap.getTitle());
        announcement.setSkills(objectToMap.getSkills());

        return announcement;
    }
}
