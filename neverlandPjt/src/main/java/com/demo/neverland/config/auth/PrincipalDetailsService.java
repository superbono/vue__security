package com.demo.neverland.config.auth;

import com.demo.neverland.model.User;
import com.demo.neverland.model.dto.LoginDto;
import com.demo.neverland.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("PrincipalDetailsService");
        User entity = repository.findByUsername(username);
        System.out.println(entity);
        return new PrincipalDetails(entity);
    }
}
