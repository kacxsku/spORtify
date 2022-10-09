package com.spORtify.web.service.user;

import com.spORtify.data.entity.User;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.service.mapper.UserDtoMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

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
        var user = userRepository.findUserByEmail(email);

        return user;
    }

    @Override
    public User findUserByEmailAndPassword(String email, String password) {
        var user = userRepository.findUserByEmailAndPassword(email, password);

        return user;
    }

    @Override
    public User findUserById(String  id) {
        var user = userRepository.findUserByUserId(parseId(id));
        return user;
    }

    @Override
    public String updatePrivateData(String id) {
        var userByUserId = userRepository.findUserByUserId(parseId(id));

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

    private Long parseId(String id){
        return Long.parseLong(id);
    }

}
