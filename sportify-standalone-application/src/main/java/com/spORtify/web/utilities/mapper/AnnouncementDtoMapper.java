package com.spORtify.web.utilities.mapper;

import com.spORtify.data.entity.Announcement;
import com.spORtify.data.entity.Coordinate;
import com.spORtify.web.dto.AnnouncementDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Date;

@Component
public class AnnouncementDtoMapper implements DtoMapper<Announcement, AnnouncementDto>{

    @Override
    public Announcement mapDto(AnnouncementDto objectToMap) throws ParseException {
        var announcement = new Announcement();
        var coordinate = new Coordinate();
        coordinate.setLatitude(objectToMap.getCoordinate().getLatitude());
        coordinate.setLongitude(objectToMap.getCoordinate().getLongitude());

        announcement.setCreator(objectToMap.getCreator());
        announcement.setContent(objectToMap.getContent());
        announcement.setTitle(objectToMap.getTitle());
        announcement.setCoordinate(coordinate);
        announcement.setSkills(objectToMap.getSkills());
        announcement.setDate(objectToMap.getDate() + " " + objectToMap.getTime());

        return announcement;
    }
}
