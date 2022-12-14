package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "skills")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Skill {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long skillId;

    private String skill_name;

    @OneToOne
    @JoinColumn(name = "skillValueId", insertable=false, updatable=false)
    private SkillValue skillValue;

}