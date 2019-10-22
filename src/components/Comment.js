import React from 'react';

function  Comment({ comment }) {
  return (
    <div className="comment">
      <img  className="avatar" width="80px" src={comment.author.avatar} alt="Profile avatar"/>
      <span> <strong>{comment.author.name}</strong> {comment.content}</span>
    </div>
  );
}

export default Comment;