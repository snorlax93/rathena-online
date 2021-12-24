package com.rathena.online.controller;

import com.rathena.online.exception.ResourceNotFoundException;
import com.rathena.online.model.Login;
import com.rathena.online.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/account/")
@CrossOrigin(origins = {"http://localhost:3000", "http://snorlaxx-server.ddns.net:3000"})
public class AccountController {

    @Autowired
    private LoginRepository loginRepository;

    /*
     * This method will get every available login record
     * 
     * @return array of objects
     */
    @RequestMapping("/login")
    public List<Login> getAllAccounts() {
        return loginRepository.findAll();
    }
    

    /*
     * This method will create 1 login record
     * 
     * @params
     * @return
     */
    @PostMapping("/login/new")
    public Login createLogin(@RequestBody Login account) {
        return loginRepository.save(account);
    }

    /*
     * This method will get 1 (single) login record based on id
     * 
     * @params
     * @return
     */
    @RequestMapping("/login/find/userid/{userId}")
    public ResponseEntity<Login> getAccountByUserId(@PathVariable String userId) {
        Login account = loginRepository.getByUserid(userId).orElse(null);
        return ResponseEntity.ok(account);
    }

    /*
     * This method will get 1 (single) login record based on id
     * 
     * @params
     * @return
     */
    @RequestMapping("/login/id/{id}")
    public ResponseEntity<Login> getAccountById(@PathVariable int id) {
        Login account = loginRepository.findById(id).orElseThrow(
            ()-> new ResourceNotFoundException("Account not found with ID: " + id)
        );
        return ResponseEntity.ok(account);
    }
}
