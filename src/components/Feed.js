import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/posts/postSlice';


const Feed = () => {
  const [userPosts, setUserPosts] = useState();
  const [likedStatus, setLikesStatus] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  
    
  useEffect(() => {
    setUserPosts(posts);
    setCurrentUser(localStorage.getItem("currentUser"))
  }, [posts]);

  const likedHandler = (post) => {
    setLikesStatus(!likedStatus)
    const filteredPost = { ...post, totalLikes: post.totalLikes + 1 }
    console.log("filteredPost: ", filteredPost)
  }

  console.log("userPosts: ", userPosts, currentUser)

  return (
    <div className="text-2xl text-center mt-10">
      <div className='flex justify-between items-center m-4'>
      <h2 className="text-5xl text-gray m-5">News Feeds</h2>
      <Link to="postform"><button className='px-2 py-1 bg-red-500 text-white rounded'>POST MESSAGE ➕</button></Link>
      </div>
      <div className="flex flex-col items-center">
        {userPosts && userPosts?.map((post) => (
          <div className="feed bg-white text-blue-950 mt-10 p-4 rounded-lg w-3/4" key={post.id}>
            <div className="flex items-center mb-2">
              <strong>{post.author}</strong>
              { post.author !== currentUser && <button className="px-2 py-1 bg-blue-500 text-white rounded text-xl ml-2">Follow</button> }
              { post.author === currentUser && <button className="px-2 py-1 bg-blue-500 text-white rounded text-xl ml-2" onClick={() => dispatch(deletePost(post.id))}>DELETE</button> }
            </div>
            <div className="text-base h-32 m-4">{post.message}</div>
            <div className="flex mt-2 gap-4">
              <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => likedHandler(post)}>{post.totalLikes} {likedStatus ? 'Liked' : 'Like'} </button>
              <button className="px-2 py-1 bg-green-500 text-white rounded">Comment</button>
            </div>
            <div className='bg-gray-500 mt-2'>
              {/* We'll map through the post.comments (have two fields name and commentMessage) */}
              All Comments Here
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
