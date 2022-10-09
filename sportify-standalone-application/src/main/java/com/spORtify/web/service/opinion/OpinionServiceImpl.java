package com.spORtify.web.service.opinion;

import com.spORtify.data.entity.Opinion;
import com.spORtify.data.repository.UserRepository;
import com.spORtify.data.util.enums.OpinionValue;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OpinionServiceImpl implements OpinionService{

    private UserRepository userRepository;

    @Override
    public List<Opinion> getOpinionsForUser(String userId) {
        return userRepository.findUserByUserId(Long.parseLong(userId)).getOpinions();
    }

    @Override
    public void createOpinionForUser(String value, String userId) {
        var id = Long.parseLong(userId);
        var user = userRepository.findUserByUserId(id);
        var opinion = new Opinion();
        opinion.setOpinionValue(OpinionValue.valueOf(value));
        user.getOpinions().add(opinion);
        userRepository.save(user);
    }


}
