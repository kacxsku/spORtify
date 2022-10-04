package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashMap;
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

    @ManyToOne
    private User user;

    @OneToMany
    @JoinColumn(name = "skill_id", nullable = false)
    private Set<Skill> skills;
}
