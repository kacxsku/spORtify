package com.spORtify.web.service.opinion;

import com.spORtify.data.entity.Opinion;
import com.spORtify.web.dto.OpinionDto;

import java.util.List;

public interface OpinionService {

    void createOpinionForUser(OpinionDto opinionDto);

    List<Opinion> getOpinionsForUser(String userId);

}
