package com.spORtify.web.service.user;

import com.spORtify.data.entity.Gender;
import com.spORtify.data.entity.User;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.LoginDto;
import com.spORtify.web.dto.UserDto;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;

    @Override
    public void saveUser(UserDto userDto) {
        var user = new User();
        user.setName(userDto.getName());
        user.setSurname(userDto.getSurname());
        user.setEmail(userDto.getEmail());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

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
    public String updateUserPassword(LoginDto loginDto) {
        var user = userRepository.findUserByEmail(loginDto.getEmail());
        user.setPassword(loginDto.getPassword());
        userRepository.save(user);
        return null;
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
        return "Credentials has been changed";
    }

    @Override
    public String createUser(UserDto userDto) {
        if (userRepository.findUserByEmail(userDto.getEmail()) == null) {
            var user = mapUserDtoToUser(userDto);
            userRepository.save(user);
            return "User Created Successfully";
        }
        return "User already exists";
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var user = userRepository.findUserByEmail(email);

        // TODO: exception
        return org.springframework.security.core.userdetails.User.withUsername(user.getEmail()).password(user.getPassword()).build();
    }

    private User mapUserDtoToUser(UserDto userDto){
        var user = new User();

        var gender = new Gender();
        gender.setName(userDto.getGender());

        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setName(userDto.getName());
        user.setSurname(userDto.getSurname());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setDescription(userDto.getDescription());
        user.setGender(gender);
        return user;
    }
}
