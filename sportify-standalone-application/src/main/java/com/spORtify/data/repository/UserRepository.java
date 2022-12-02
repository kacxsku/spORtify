package com.spORtify.data.repository;

import com.spORtify.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends  JpaRepository<User,Long>  {
    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);

    User findUserByUserId(Long id);

}