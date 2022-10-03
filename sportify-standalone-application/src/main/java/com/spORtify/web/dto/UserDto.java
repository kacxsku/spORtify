package com.spORtify.web.dto;

import com.spORtify.data.util.enums.GenderName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {

    private String name;

    private String surname;

    private String email;

    private String phoneNumber;

    private GenderName gender;

    private String password;

    private String description;

    public UserDto(String name, String surname, String email, String phoneNumber, String gender,  String city, String description) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = GenderName.valueOf(gender);
        this.password = password;
        this.description = description;
    }
}
