package com.example.cs455020su1Group13FinalProjectJavaServer.services;

import com.example.cs455020su1Group13FinalProjectJavaServer.models.Comment;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

  List<Comment> comments = new ArrayList<Comment>();

  {
    comments.add(new Comment("comment1",-1,-1,"tt0103776"));
    comments.add(new Comment("comment2",-1,-1,"tt0103776"));
    comments.add(new Comment("comment3",-1,-1,"tt0103776"));
  }

  public List<Comment> findCommentForComment(Integer cid) {
    List<Comment> ans = new ArrayList<Comment>();
    for (Comment c : comments) {
      if (c.getCommentFor() == cid) {
        ans.add(c);
      }
    }
    return ans;
  }

  public List<Comment> findCommentForMovie(String mid) {
    List<Comment> ans = new ArrayList<Comment>();
    for (Comment c : comments) {
      if (c.getMovie() == mid) {
        ans.add(c);
      }
    }
    return ans;
  }

  public Comment createComment(Comment newComment) {
    newComment.setId(this.comments.size());
    this.comments.add(newComment);
    return newComment;
  }


  public int deleteComment(Integer cid) {
    List<Comment> ans = new ArrayList<Comment>();
    for (Comment w : this.comments) {
      if (!w.getId().equals(cid)) {
        ans.add(w);
      }
    }
    if (this.comments.size() == ans.size()) {
      return 0;
    } else {
      this.comments = ans;
      return 1;
    }
  }
}
