package com.spORtify.data.repository;

import com.spORtify.data.entity.User;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    User findUserByEmail(String email);


    User findUserByEmailAndPassword(String email, String password);

}
