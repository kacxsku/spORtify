package com.spORtify.web.service.user;

import com.spORtify.data.entity.User;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.utilities.mapper.UserDtoMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    private UserDtoMapper mapper;
    @Override
    public void saveUser(UserDto userDto) {
        var user = mapper.mapDto(userDto);
        userRepository.save(user);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public User findUserByEmailAndPassword(String email, String password) {
        return userRepository.findUserByEmailAndPassword(email, password);
    }

    @Override
    public User findUserById(String  id) {
        return userRepository.findUserByUserId(parseId(id));
    }

    @Override
    public String updatePrivateData(UserDto userDto,String id) {
        var userByUserId = userRepository.findUserByUserId(parseId(id));
        var updatedUser = mapper.mapDto(userDto);

        userByUserId.setName(updatedUser.getName());
        userByUserId.setSurname(updatedUser.getSurname());
        userByUserId.setPhoneNumber(updatedUser.getPhoneNumber());
        userByUserId.setAddress(updatedUser.getAddress());

        userRepository.save(updatedUser);
        return "OK";
    }

    @Override
    public void uploadPhoto(MultipartFile file, String id) throws IOException {
        var user = userRepository.findUserByUserId(parseId(id));
        user.setPhoto(file.getBytes());
        userRepository.save(user);
    }

    @Override
    public void changeDescription(String id, String description) {
        var user =  userRepository.findUserByUserId(parseId(id));
        user.setDescription(description);
        userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var user = userRepository.findUserByEmail(email);

        return org.springframework.security.core.userdetails.User.withUsername(user.getEmail()).password(new BCryptPasswordEncoder().encode(user.getPassword())).authorities(new ArrayList<>()).build();
    }

    private Long parseId(String id){
        return Long.parseLong(id);
    }

}
