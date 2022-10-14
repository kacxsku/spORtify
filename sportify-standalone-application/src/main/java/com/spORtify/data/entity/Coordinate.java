package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Blob;
import java.text.DecimalFormat;

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

    private Double longitude;

    private Double latitude;
}
