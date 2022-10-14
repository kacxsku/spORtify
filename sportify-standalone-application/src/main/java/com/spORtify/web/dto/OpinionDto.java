package com.spORtify.web.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class OpinionDto {

    private Long userId;

    private String description;

    private Long value;
}
