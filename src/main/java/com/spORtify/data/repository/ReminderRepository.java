package com.spORtify.data.repository;

import com.spORtify.data.entity.Reminder;
import org.springframework.data.repository.CrudRepository;

public interface ReminderRepository extends CrudRepository<Reminder, Long> {
}
