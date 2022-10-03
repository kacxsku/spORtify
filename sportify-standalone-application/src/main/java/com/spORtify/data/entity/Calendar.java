package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "calendar")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Calendar {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long calendarId;

}
