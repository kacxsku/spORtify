package com.spORtify.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

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
    private byte[] photo;

    @OneToOne
    @JoinColumn(name = "address", insertable=false, updatable=false)
    private Address address;

    @OneToOne
    @JoinColumn(name = "gender", insertable=false, updatable=false)
    private Gender gender;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Opinion> opinions = new ArrayList<>();

}