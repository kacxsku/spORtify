package com.spORtify.web.service.opinion;

import com.spORtify.data.entity.Opinion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OpinionService {

    void createOpinionForUser(String value, String UserId);

    List<Opinion> getOpinionsForUser(String userId);

}
