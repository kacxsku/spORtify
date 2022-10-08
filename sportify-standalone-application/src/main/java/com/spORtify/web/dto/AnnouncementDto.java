package com.spORtify.web.dto;

import com.spORtify.data.entity.Coordinate;
import com.spORtify.data.entity.Skill;
import com.spORtify.data.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class AnnouncementDto {

    private String title;

    private String content;

    private User creator;

    private Set<Skill> skills;

    private Coordinate coordinate;


}
