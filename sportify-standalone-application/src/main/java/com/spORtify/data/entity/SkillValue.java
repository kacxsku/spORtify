package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "skill_value")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SkillValue {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long skillValueId;

    private Long value;
}
