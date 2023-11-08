// Logout.js
import React from 'react';

const Logout = () => {
  // Remove user data from local storage to log out
  localStorage.removeItem('currentUser');
  return <div className='text-2xl flex justify-center items-center m-auto'>You have been logged out.</div>;
};

export default Logout;
