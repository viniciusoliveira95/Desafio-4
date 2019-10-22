import React from 'react';

import Comment from './Comment';

function  Post({ post }) {
  console.log(post)
  return (
    <div className="post">
      <div>
        <div>
          <img className="avatar" src={post.author.avatar} alt="Profile avatar"/>
          <span>
            <strong>{post.author.name}</strong>
            <p>{post.date}</p>
          </span>
        </div>
        <div>{post.content}</div>
      </div>
      <hr/>
      <div>
        {post.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
      </div>
    </div>
  );
}


export default Post;