package com.spORtify.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Announcement {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long announcement_id;

    private String title;

    private String content;

    @ManyToOne
    private User user;
}
