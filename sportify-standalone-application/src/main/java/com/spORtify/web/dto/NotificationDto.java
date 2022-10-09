package com.spORtify.web.dto;

import com.spORtify.data.util.enums.ImportanceLevel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NotificationDto {

    private String userId;
    private ImportanceLevel importanceLevel;
    private String title;
    private String description;
}
