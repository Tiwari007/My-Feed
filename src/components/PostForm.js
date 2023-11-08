import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/posts/postSlice';

const PostForm = () => {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch()

  const handlePost = () => {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      let post = [
        {
          id: Math.random().toString(36).substring(2, 8),
          author: currentUser,
          message: message,
          totalLikes: 0,
          comments: [],
        },
      ];
      console.log("post: ", post)
      dispatch(addPost(post))

      setMessage('');
      alert('Your Post Successfully Added');
    } else {
      alert('You need to Login First');
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-lg font-semibold mb-2">Create a Post</h2>
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />
      <button
        onClick={handlePost}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Post
      </button>
    </div>
  );
};

export default PostForm;
