package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "gender")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Gender {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long genderId;

    private String name;

}