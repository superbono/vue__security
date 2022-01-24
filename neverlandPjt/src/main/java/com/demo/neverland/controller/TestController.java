package com.demo.neverland.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
@Api(tags = {"Contoller 테스트"})
public class TestController {

    @GetMapping("/test")
    @ApiOperation(value = "테스트", notes = "")
    public String test() {
        return "테스트 완료";
    }

}
