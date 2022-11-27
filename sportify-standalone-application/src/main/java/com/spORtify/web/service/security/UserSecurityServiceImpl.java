package com.spORtify.web.service.security;

import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.JwtRequestModel;
import com.spORtify.web.dto.UserDto;
import com.spORtify.web.security.manager.JwtTokenManager;
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
    private JwtTokenManager tokenManager;

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
    public String loginUser(JwtRequestModel jwtRequestModel) {
        try{
            var authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    jwtRequestModel.getEmail(), jwtRequestModel.getPassword()
            ));
            SecurityContextHolder
                    .getContext()
                    .setAuthentication(authentication);
        } catch (AuthenticationException e){
            return "User with this credentials does not exists";
        }
        var  userDetails = userRepository.findUserByEmail(jwtRequestModel.getEmail());
        return tokenManager.generateJwtToken(userDetails);
    }

    @Override
    public String updateUserPassword(JwtRequestModel jwtRequestModel) {
        var user = userRepository.findUserByEmail(jwtRequestModel.getEmail());
        user.setPassword(jwtRequestModel.getPassword());
        userRepository.save(user);
        return "updated";
    }

}
