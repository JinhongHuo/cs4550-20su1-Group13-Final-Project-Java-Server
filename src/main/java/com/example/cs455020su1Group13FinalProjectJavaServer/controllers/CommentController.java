package com.example.cs455020su1Group13FinalProjectJavaServer.controllers;


import com.example.cs455020su1Group13FinalProjectJavaServer.models.Comment;
import com.example.cs455020su1Group13FinalProjectJavaServer.services.CommentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*")
public class CommentController {

  @Autowired
  CommentService commentService;


  @GetMapping("/api/comments/{commentId}/comments")
  public List<Comment> findCommentForComment(
      @PathVariable("commentId") Integer cid) {
    return commentService.findCommentForComment(cid);
  }

  @GetMapping("/api/movies/{movieId}/comments")
  public List<Comment> findCommentForMovie(
      @PathVariable("movieId") String mid) {
    return commentService.findCommentForMovie(mid);
  }

  @PostMapping("/api/movies/{movieId}/comments")
  public Comment createComment(
      @PathVariable("movieId") String mid,
      @RequestBody Comment newComment) {
    newComment.setMovie(mid);
    commentService.createComment(newComment);
    return newComment;
  }

  @DeleteMapping("/api/comments/{commentId}")
  public int deleteComment(
      @PathVariable("commentId") Integer cid) {
    return commentService.deleteComment(cid);
  }


}
