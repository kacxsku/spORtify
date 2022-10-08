package com.spORtify.web.dto;

import com.spORtify.data.entity.Address;
import com.spORtify.data.util.enums.GenderName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserDto {

    private String name;

    private String surname;

    private String email;

    private String phoneNumber;

    private GenderName gender;

    private String password;

    private String description;

    private Address address;
}
