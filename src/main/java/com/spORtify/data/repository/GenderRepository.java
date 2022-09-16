package com.spORtify.data.repository;

import com.spORtify.data.entity.Gender;
import org.springframework.data.repository.CrudRepository;

public interface GenderRepository extends CrudRepository<Gender, Long> {
}
