import React from "react";
import Comment from "./Comment";

const comments=[
  {
    name: "Nora",
    comment:"우하하하 우리티미 개멋있다!!"
  },
  {
    name: "Tim",
    comment:"뭐야뭐야_-"
  },
  {
    name: "Nora",
    comment:"우하하하 우리티미 개멋있다!!"
  },
  {
    name: "Tim",
    comment:"뭐야뭐야_-"
  },
]

function CommentList(props){

  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}/>
        );
      })}
    </div>
  );
}

export default CommentList;