package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@Table(name = "coordinates")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Coordinate {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long coordinateId;

    private String longitude;

    private String latitude;
}