// Post.js
import React, { useState } from 'react';
import { posts } from '../data';

const PostForm = () => {
  const [message, setMessage] = useState('');
  const [userPosts, setUsersPosts] = useState(posts)

  const handlePost = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push({ username: user.username, message });
      localStorage.setItem('posts', JSON.stringify(posts));
      setMessage('');
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
