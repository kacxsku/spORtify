package com.spORtify.web.service;

import com.spORtify.data.entity.User;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.UserDto;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public void saveUser(UserDto userDto) {
        var user = new User();
        user.setName(userDto.getName());
        user.setSurname(userDto.getSurname());
        user.setEmail(userDto.getEmail());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
    //        Gender

        userRepository.save(user);
    }

    @Override
    public User findUserByEmail(String email) {
        var user = userRepository.findUserByEmail(email);

        return user;
    }

    @Override
    public User findUserByEmailAndPassword(String email, String password) {
        var user = userRepository.findUserByEmailAndPassword(email, password);

        return user;
    }

}
