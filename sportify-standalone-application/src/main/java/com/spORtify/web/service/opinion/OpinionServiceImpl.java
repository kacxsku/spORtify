package com.spORtify.web.service.opinion;

import com.spORtify.data.entity.Opinion;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.web.dto.OpinionDto;
import com.spORtify.web.utilities.mapper.OpinionDtoMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OpinionServiceImpl implements OpinionService{

    private UserRepository userRepository;

    private OpinionDtoMapper opinionDtoMapper;

    @Override
    public List<Opinion> getOpinionsForUser(String userId) {
        return userRepository.findUserByUserId(Long.parseLong(userId)).getOpinions();
    }

    @Override
    public void createOpinionForUser(OpinionDto opinionDto) {
        var opinion = opinionDtoMapper.mapDto(opinionDto);
        var user = userRepository.findUserByUserId(opinionDto.getUserId());

        user.getOpinions().add(opinion);
        userRepository.save(user);
    }
}
