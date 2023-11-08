import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {

    const savedUser = JSON.parse(localStorage.getItem("users"))
    const users = [ ...savedUser , {username, password} ]
    // Save user data to local storage
    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md text-black text-center">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={handleSignup} className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
