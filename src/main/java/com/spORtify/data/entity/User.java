package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long user_id;

    private String name;

    private String surname;

    private String email;

    private String phoneNumber;

    private String description;

    private String paswordHash; //TODO:

    @Lob
    private Blob photo;

    private Long address_id;

    private Long gender_id;

}
