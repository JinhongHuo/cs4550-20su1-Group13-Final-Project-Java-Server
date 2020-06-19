package com.example.cs455020su1Group13FinalProjectJavaServer.models;

public class Comment {

  private Integer id;
  private String text;
  private Integer time;
  private Integer commentFor;
  private String movie;
  private Integer postedBy;

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
    return movie;
  }

  public void setMovie(String movie) {
    this.movie = movie;
  }

  public Comment(String text, Integer time, Integer commentFor, String movie) {
    this.text = text;
    this.time = time;
    this.commentFor = commentFor;
    this.movie = movie;
  }

  public Integer getPostedBy() {
    return postedBy;
  }

  public void setPostedBy(Integer postedBy) {
    this.postedBy = postedBy;
  }
}
