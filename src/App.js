import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import Login from './components/Login';
import PostForm from './components/PostForm';
import Signup from './components/SignUp';
import Logout from './components/Logout';
import { users } from './data';
import Users from './components/Users';

function App() {


  // Let's save all the initial data (sample) to local storage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  })

  return (
    <Router>
      <div className="m-10">
        <Header />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
