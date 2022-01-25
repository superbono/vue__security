package com.demo.neverland.controller;

import com.demo.neverland.model.User;
import com.demo.neverland.model.dto.LoginDto;
import com.demo.neverland.model.dto.UserDto;
import com.demo.neverland.repository.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
@Api(tags = {"회원가입 및 로그인"})
public class UserController {

    @Autowired
    private UserRepository repository;

//    @GetMapping("/test")
//    @ApiOperation(value = "")
//    public String test() {
//        return "테스트 완료";
//    }

    @PostMapping("/register")
    @ApiOperation(value = "[회원가입]", notes = "회원가입을 위한 API입니다. email/ password/ nickname을 입력하고 실행해주세요.")
//    public void register(User user, @RequestParam("email") String email, @RequestParam("password") String password) {
    public void register(@RequestBody UserDto user) {
        User newUser = User.builder()
                .email(user.getEmail())
                .password(new BCryptPasswordEncoder().encode(user.getPassword()))
                .nickname(user.getNickname())
                .roles("ROLE_USER")
                .build();
        repository.save(newUser);
        System.out.println("회원가입로직");
        //return "회원가입로직";
    }

    @GetMapping("/login")
    @ApiOperation(value = "[로그인]", notes = "로그인을 위한 API입니다. email/ password를 입력하고 실행해주세요.")
    public String login(@RequestBody LoginDto user) {
        return "로그인 완료";
    }
}
