import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    // Fetch posts from local storage
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    setCurrentUser(localStorage.getItem("currentUser"))
    const tempUsers = allUsers.filter(user => user.username !== currentUser)
    setUsers(tempUsers)
    setFilteredUsers(tempUsers);
  }, [currentUser]);


  console.log("users: ", users, currentUser)

  const followHandler = (user, index) => {
    console.log("index: ", index, user)
    if(currentUser) {
      alert(`You Followed ${user.username}`)
    }
    else{
      alert(`You need to Login First.
      Use Username: guest
      Password: 12345
      `);
    }
  }

  console.log("userPosts: ", filteredUsers)

  return (
    <div className="text-2xl text-center mt-10">
        <div className='text-center mt-6 flex justify-around'>
            <h2 className="text-3xl text-gray-600 m-5">USERS</h2>
            <input type='text' placeholder='Search User' className='p-4 text-black' onChange={(e) => setFilteredUsers(users.filter(user => user.username.toLowerCase().includes(e.target.value.toLowerCase())))}/>
        </div>
      
      <div className="flex flex-col items-center">
        {filteredUsers?.map((user, index) => (
          <div className="feed bg-white text-blue-950 mt-10 p-4 rounded-lg w-3/4" key={index}>
            <div className="flex items-center mb-2">
              <strong>{user.username}</strong>
              <button className="px-2 py-1 bg-blue-500 text-white rounded text-xl ml-2" onClick={() => followHandler(user, index)}>Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
