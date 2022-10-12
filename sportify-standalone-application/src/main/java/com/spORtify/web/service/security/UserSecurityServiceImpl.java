package com.spORtify.web.service.security;

import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.LoginDto;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.utilities.mapper.UserDtoMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserSecurityServiceImpl implements UserSecurityService{

    private AuthenticationManager authenticationManager;

    private UserRepository userRepository;

    private UserDtoMapper userDtoMapper;

    @Override
    public String createUser(UserDto userDto) {
        if (userRepository.findUserByEmail(userDto.getEmail()) == null) {
            var user = userDtoMapper.mapDto(userDto);
            userRepository.save(user);
            return "User Created Successfully";
        }
        return "User already exists";
    }

    @Override
    public String loginUser(LoginDto loginDto) {
        try{
            var authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginDto.getEmail(), loginDto.getPassword()
            ));
            SecurityContextHolder
                    .getContext()
                    .setAuthentication(authentication);
        } catch (AuthenticationException e){
            return "User with this credentials does not exists";
        }
        return "login success";
    }

    @Override
    public String updateUserPassword(LoginDto loginDto) {
        var user = userRepository.findUserByEmail(loginDto.getEmail());
        user.setPassword(loginDto.getPassword());
        userRepository.save(user);
        return "updated";
    }

}
