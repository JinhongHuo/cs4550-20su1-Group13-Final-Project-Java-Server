package com.example.cs455020su1Group13FinalProjectJavaServer.controllers;

import com.example.cs455020su1Group13FinalProjectJavaServer.models.User;
import com.example.cs455020su1Group13FinalProjectJavaServer.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(
    origins = "*",
    allowCredentials = "true")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/api/register")
    public User register(
        @RequestBody User user,
        HttpSession session) {
        User existingUser = service.findUserByUsername(user.getUsername());
        if (existingUser == null) {
            User currentUser = service.createUser(user);
            session.setAttribute("currentUser", currentUser);
            return currentUser;
        }
        return null;
    }

    @GetMapping("/api/users/{uid}")
    public User findUserById(
        @PathVariable("uid") Integer uid) {
        return service.findUserById(uid);
    }

    @PostMapping("/api/profile")
    public User profile(HttpSession session) {
        User currentUser = (User) session.getAttribute("currentUser");
        return currentUser;
    }

    @PutMapping("/api/profile")
    public User updateProfile(
        @RequestBody User user) {
        return service.updateUser(user);
    }

    @PostMapping("/api/login")
    public User login(
        @RequestBody User user,
        HttpSession session) {
        User currentUser = service.findUserByCredentials(user.getUsername(), user.getPassword());
        session.setAttribute("currentUser", currentUser);
        return currentUser;
    }

    @PostMapping("/api/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }
}
