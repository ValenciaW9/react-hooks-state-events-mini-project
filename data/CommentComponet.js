import React from "react";

function Comment({ comment }) {
  return (
    <div>
      <p>User: {comment.user}</p>
      <p>Comment: {comment.comment}</p>
      <button>👍</button>
      <button>👎</button>
    </div>
  );
}

export default Comment;
