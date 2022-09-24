package com.spORtify.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.spORtify.web.utilities.Constants.HOME_PATH;

@RestController
public class MainController {

    @GetMapping(HOME_PATH)
    public String test(){
        return "test";
    }


}
