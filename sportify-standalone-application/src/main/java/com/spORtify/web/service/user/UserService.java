package com.spORtify.web.service.user;

import com.spORtify.data.entity.User;
import com.spORtify.web.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UserService extends UserDetailsService {

    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);

    User findUserById(String id);

    String updatePrivateData(UserDto userDto,String id);

    void uploadPhoto(MultipartFile file, String id) throws IOException;

    void changeDescription(String id, String description);
}