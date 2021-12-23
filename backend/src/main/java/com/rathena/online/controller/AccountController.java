package com.rathena.online.controller;

import com.rathena.online.model.Login;
import com.rathena.online.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/account/")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {

    @Autowired
    private LoginRepository loginRepository;

    /*
     * get all login accounts
     */
    @RequestMapping("/login")
    public List<Login> getAllAccounts() {
        return loginRepository.findAll();
    }
}
