package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long userId;

    private String name;

    private String surname;

    private String email;

    private String phoneNumber;

    private String description;

    private String password;

    @Lob
    private Blob photo;

//    @JoinColumn(name = "address_id", nullable = false)
//    private Address address;

    @OneToOne
    @JoinColumn(name = "gender_id", nullable = false)
    private Gender gender;

}
