package com.example.cs455020su1Group13FinalProjectJavaServer.services;

import com.example.cs455020su1Group13FinalProjectJavaServer.models.User;
import com.example.cs455020su1Group13FinalProjectJavaServer.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  UserRepository repository;

  public User updateUser(User updatedUser) {
    User user = repository.findUserById(updatedUser.getId());
    user.setPassword(updatedUser.getPassword());
    user.setEmail(updatedUser.getEmail());
    user.setPhone(updatedUser.getPhone());
    user.setDob(updatedUser.getDob());
    user.setRole(updatedUser.getRole());
    repository.save(user);
    return user;
  }

  public User createUser(User user) {
    return repository.save(user);
  }

  public User findUserById(Integer id) {
    return repository.findUserById(id);
  }

  public User findUserByCredentials(String username, String password) {
    return repository.findUserByCredentials(username, password);
  }

  public User findUserByUsername(String username) {
    return repository.findUserByUsername(username);
  }
}
