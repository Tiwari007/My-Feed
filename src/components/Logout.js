// Logout.js
import React from 'react';

const Logout = () => {
  // Remove user data from local storage to log out
  localStorage.removeItem('user');

  return <div className='text-2xl flex justify-center items-center m-10'>You have been logged out.</div>;
};

export default Logout;
