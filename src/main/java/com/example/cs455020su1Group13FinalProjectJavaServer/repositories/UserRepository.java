package com.example.cs455020su1Group13FinalProjectJavaServer.repositories;

import com.example.cs455020su1Group13FinalProjectJavaServer.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository
    extends CrudRepository<User, Integer>
{
    @Query("SELECT user FROM User user WHERE user.id=:uid")
    public User findUserById(@Param("uid") Integer userId);

    @Query("SELECT user FROM User user WHERE user.username=:username AND user.password=:password")
    User findUserByCredentials(
            @Param("username") String username,
            @Param("password") String password);

    @Query("SELECT user FROM User user WHERE user.username=:u")
    public User findUserByUsername(
            @Param("u") String username);
}
