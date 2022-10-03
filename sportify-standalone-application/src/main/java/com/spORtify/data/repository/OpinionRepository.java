package com.spORtify.data.repository;

import com.spORtify.data.entity.Opinion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpinionRepository extends JpaRepository<Opinion, Long> {
}
