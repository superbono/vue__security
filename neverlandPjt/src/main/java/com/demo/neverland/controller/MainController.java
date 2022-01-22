package com.demo.neverland.controller;

import com.demo.neverland.model.User;
import com.demo.neverland.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MainController {

    @Autowired
    private UserRepository repository;

    @GetMapping("/test")
    public String test() {
        return "테스트 완료";
    }

//    @GetMapping("/register")
//    public String regist() {
//        return "회원가입로직";
//    }

    @PostMapping("/register")
    public void register(@RequestBody User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        user.setRoles("ROLE_USER");
        repository.save(user);
        System.out.println("회원가입로직");
        //return "회원가입로직";
    }
}
