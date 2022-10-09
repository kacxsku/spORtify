package com.spORtify.web.utilities.mapper;

import com.spORtify.data.entity.Announcement;
import com.spORtify.web.dto.AnnouncementDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class AnnouncementDtoMapper implements DtoMapper<Announcement, AnnouncementDto>{

    @Override
    public Announcement mapDto(AnnouncementDto objectToMap) {
        return null;
    }
}
