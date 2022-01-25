package com.demo.neverland.controller;


import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Api(tags = {"게시판 관련 로직"})
public class PostController {

    @GetMapping("/board")
    public String board() {
        return "게시판컨트롤러 테스트";
    }
}
