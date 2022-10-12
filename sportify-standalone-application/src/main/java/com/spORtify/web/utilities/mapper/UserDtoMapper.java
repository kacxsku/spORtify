package com.spORtify.web.utilities.mapper;

import com.spORtify.data.entity.User;
import com.spORtify.web.dto.UserDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class UserDtoMapper implements DtoMapper<User, UserDto>{

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User mapDto(UserDto objectToMap) {
        var user = new User();
        user.setName(objectToMap.getName());
        user.setSurname(objectToMap.getSurname());
        user.setEmail(objectToMap.getEmail());
        user.setPhoneNumber(objectToMap.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(objectToMap.getPassword()));

        return user;
    }
}
