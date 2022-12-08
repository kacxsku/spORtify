package com.spORtify.web.mapper;


import com.spORtify.data.entity.User;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.utilities.mapper.UserDtoMapper;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;


public class UserDtoMapperTest {

     private final UserDtoMapper userDtoMapper = new UserDtoMapper(new BCryptPasswordEncoder());

    @Test
    void shouldMapUserDtoToUserEntity(){
        var dto = prepareData();
        var result = userDtoMapper.mapDto(dto);

        assertNotNull(result);
        assertTrue(result instanceof User);
        assertEquals("Jan", result.getName());
        assertEquals("Kowalski", result.getSurname());
        assertEquals("jankowalski@email.com", result.getEmail());
        assertEquals("123456789", result.getPhoneNumber());
        }

    UserDto prepareData()  {
        return new UserDto("Jan", "Kowalski", "jankowalski@email.com", "123456789", "male", "password", "Krakow", "I am John");
    }
}
