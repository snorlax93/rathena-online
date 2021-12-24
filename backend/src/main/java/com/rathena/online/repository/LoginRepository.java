package com.rathena.online.repository;

import java.util.Optional;

import com.rathena.online.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
    Optional<Login> getByUserid(String userid);
}
