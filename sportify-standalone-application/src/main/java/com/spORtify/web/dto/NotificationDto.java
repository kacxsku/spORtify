package com.spORtify.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NotificationDto {

    private String userId;
    private String importanceLevel;
    private String title;
    private String description;
}
