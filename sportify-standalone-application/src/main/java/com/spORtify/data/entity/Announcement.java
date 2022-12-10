package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "announcement")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Announcement {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long announcementId;

    private String title;

    private String content;

    private String date;

    @OneToOne
    @JoinColumn(name = "creator")
    private User creator;

    @OneToOne
    @JoinColumn(name = "participant")
    private User participant;

    @OneToOne
    @JoinColumn(name = "coordinateId")
    private Coordinate coordinate;

    @OneToMany(cascade = CascadeType.ALL)
    private Set<Skill> skills = new HashSet<>();
}