package com.spORtify.data.entity;

import com.spORtify.data.util.enums.ImportanceLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "notifications")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Notification {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long notificationId;

    @Enumerated(EnumType.ORDINAL)
    private ImportanceLevel importanceLevel;

    private String title;

    private String description;

    @ManyToOne
    private User user;


}
