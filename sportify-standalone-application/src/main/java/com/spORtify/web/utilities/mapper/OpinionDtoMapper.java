package com.spORtify.web.utilities.mapper;

import com.spORtify.data.entity.Opinion;
import com.spORtify.data.entity.SkillValue;
import com.spORtify.web.dto.OpinionDto;
import org.springframework.stereotype.Component;

@Component
public class OpinionDtoMapper implements DtoMapper<Opinion, OpinionDto> {
    @Override
    public Opinion mapDto(OpinionDto objectToMap) {
        var value = new SkillValue();
        value.setValue(objectToMap.getValue());

        var opinion = new Opinion();
        opinion.setOpinionDescription(objectToMap.getDescription());
        opinion.setOpinionValue(value);

        return opinion;
    }
}
