// Post.js
import React, { useState } from 'react';
// import { posts } from '../data';

const PostForm = () => {
  const [message, setMessage] = useState('');
  // const [userPosts, setUsersPosts] = useState(posts)

  const handlePost = () => {
    const currentUser = localStorage.getItem('currentUser');
    const allPosts = JSON.parse(localStorage.getItem('posts'))

    if (currentUser) {
      let post = [{
        id: Math.random().toString(36).substring(2, 8),
        author: currentUser,
        message: message,
        totalLikes: 0,
        comments: []
      }]
      let updatedPost = { ...allPosts, ...post }
      localStorage.setItem('posts', JSON.stringify(updatedPost));
      setMessage('');
    }
    else{
      // UnAuthorized
      alert("You need to Login First")
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default PostForm;
