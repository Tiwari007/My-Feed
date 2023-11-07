// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleLogin = () => {
    // Check if user exists in local storage
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      // User is authenticated, you can set a state variable or redirect them.
      localStorage.setItem("currentUser", username)
      navigate('/')
    } else {
      // Invalid login
      alert("Invalid Credentials")
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md text-black text-center">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full py-2 px-3 border rounded mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full py-2 px-3 border rounded mb-3"
      />
      <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default Login;
