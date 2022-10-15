package com.spORtify.web.controller;

import com.spORtify.data.entity.Opinion;
import com.spORtify.web.dto.OpinionDto;
import com.spORtify.web.service.opinion.OpinionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.spORtify.web.utilities.Constants.CREATE_OPINION_FOR_USER_PATH;
import static com.spORtify.web.utilities.Constants.OPINIONS_PATH;

@RestController
@AllArgsConstructor
public class OpinionController {

    private OpinionService opinionService;

    @PostMapping(CREATE_OPINION_FOR_USER_PATH)
    public ResponseEntity<String> createOpinionForUser(@RequestBody OpinionDto opinionDto){
        try {
            opinionService.createOpinionForUser(opinionDto);
            return ResponseEntity.status(HttpStatus.OK).body("opinion created");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not create opinion");
        }
    }

    @GetMapping(OPINIONS_PATH + "/{id}")
    public List<Opinion> getAllOpinionForUser(@PathVariable String id){
        return opinionService.getOpinionsForUser(id);
    }

}
