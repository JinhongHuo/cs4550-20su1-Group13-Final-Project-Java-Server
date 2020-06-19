package com.example.cs455020su1Group13FinalProjectJavaServer.models;

public class Comment {

  private Integer id;
  private String text;
  private Integer time;
  private Integer commentFor;
  private String Movie;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public Integer getTime() {
    return time;
  }

  public void setTime(Integer time) {
    this.time = time;
  }

  public Integer getCommentFor() {
    return commentFor;
  }

  public void setCommentFor(Integer commentFor) {
    this.commentFor = commentFor;
  }

  public String getMovie() {
    return Movie;
  }

  public void setMovie(String movie) {
    Movie = movie;
  }

  public Comment(String text, Integer time, Integer commentFor, String movie) {
    this.text = text;
    this.time = time;
    this.commentFor = commentFor;
    Movie = movie;
  }
}
