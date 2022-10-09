package com.spORtify.web.service.opinion;

import com.spORtify.data.entity.Opinion;

import java.util.List;

public interface OpinionService {

    void createOpinionForUser(String value, String UserId);

    List<Opinion> getOpinionsForUser(String userId);

}
