package com.spORtify.data.entity;

import com.spORtify.data.util.enums.GenderName;
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

    @Enumerated(EnumType.ORDINAL)
    private GenderName name;

}
