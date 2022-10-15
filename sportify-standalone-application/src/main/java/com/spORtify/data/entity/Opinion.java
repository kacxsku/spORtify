package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "opinions")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Opinion {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long opinionId;

    @OneToOne
    @JoinColumn(name = "opinionValue", insertable=false, updatable=false)
    private SkillValue opinionValue;

    private String opinionDescription;


}
