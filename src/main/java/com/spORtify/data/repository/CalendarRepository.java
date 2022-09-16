package com.spORtify.data.repository;

import com.spORtify.data.entity.Calendar;
import org.springframework.data.repository.CrudRepository;

public interface CalendarRepository extends CrudRepository<Calendar, Long> {
}
