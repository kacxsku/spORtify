package com.spORtify.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtRequestModel {
    private String email;
    private String password;
}
