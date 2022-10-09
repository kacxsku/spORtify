package com.spORtify.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "announcement")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Coordinate {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long coordinateId;

    private  Long longitude;

    private Long latitude;
}
