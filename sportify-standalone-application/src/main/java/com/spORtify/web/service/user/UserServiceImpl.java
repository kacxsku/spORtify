package com.spORtify.web.service.user;

import com.spORtify.data.entity.User;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.utilities.mapper.UserDtoMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

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
    public String updatePrivateData(String id) {
        var userByUserId = userRepository.findUserByUserId(parseId(id));

        userRepository.save(userByUserId);
        return "OK";
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var user = userRepository.findUserByEmail(email);

        return org.springframework.security.core.userdetails.User.withUsername(user.getEmail()).password(user.getPassword()).build();
    }

    private Long parseId(String id){
        return Long.parseLong(id);
    }

}
