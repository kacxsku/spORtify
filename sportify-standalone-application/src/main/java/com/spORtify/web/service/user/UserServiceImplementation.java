package com.spORtify.web.service.user;

import com.spORtify.data.entity.User;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

    @Override
    public User findUserById(Long id) {
        var user = userRepository.findUserByUserId(id);
        return user;
    }

    @Override
    public String updatePrivateData(Long id) {
        var userByUserId = userRepository.findUserByUserId(id);

        //TODO check and  data

        userRepository.save(userByUserId);
        return "OK";
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var user = userRepository.findUserByEmail(email);

        // TODO: exception
        return org.springframework.security.core.userdetails.User.withUsername(user.getEmail()).password(user.getPassword()).build();
    }
}
