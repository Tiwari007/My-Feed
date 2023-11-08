import React from 'react';
import { Link } from 'react-router-dom';
const currentUser = localStorage.getItem("currentUser");

const Header = () => {
  return (
    <div className='text-center mt-6 flex justify-between'>
      <p className='text-5xl '>Stantech AI<a href="https://projectsbyvivektiwari.netlify.app/" target="_blank" rel="noreferrer" className='text-3xl text-green-900'><button className='ml-10 mr-4 p-2 px-6 bg-red-100'>Click on Me</button></a></p>
      <div className='flex'>
        <Link to="/"><button className='mr-4 p-2 px-6 bg-yellow-100 text-black'>HOME</button></Link>
        <Link to="/users"><button className='mr-4 p-2 px-6 bg-yellow-100 text-black'>USERS</button></Link>
        {
          currentUser ? <Link to="/logout"><button className='mr-4 p-2 px-6 bg-yellow-100 text-black'>LOGOUT</button></Link> : <><Link to="/login"><button className='mr-4 p-2 px-6 bg-yellow-100 text-black'>LOGIN</button></Link>
            <Link to="/signup"><button className='mr-4 p-2 px-6 bg-yellow-100 text-black'>SIGNUP</button></Link></>
        }
      </div>
    </div>
  );
}

export default Header;
