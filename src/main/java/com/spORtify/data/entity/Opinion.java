package com.spORtify.data.entity;

import com.spORtify.data.util.enums.OpinionValue;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Opinion {

    @Id
    private Long opinion_id;

    @Enumerated(EnumType.ORDINAL)
    private OpinionValue opinion;
}
