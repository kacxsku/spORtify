package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "importance_level")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ImportanceLevel {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long ImportanceLevelId;

    private Long value;
}
