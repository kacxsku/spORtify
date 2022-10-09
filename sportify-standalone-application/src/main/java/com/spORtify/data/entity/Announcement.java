package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
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

    private Date date;

    @ManyToOne
    @JoinColumn(name = "userId", insertable=false, updatable=false, nullable = false)
    private User creator;

    @OneToOne
    @JoinColumn(name = "userId", insertable=false, updatable=false)
    private User participant;

    @OneToMany
    @JoinColumn(name = "skillId", nullable = false, insertable=false, updatable=false)
    private Set<Skill> skills;
}
