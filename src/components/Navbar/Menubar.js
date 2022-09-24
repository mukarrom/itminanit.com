import React from 'react';

function Menubar() {
  return (
    <nav className="flex justify-around">
      <div className="">Logo</div>
      <div className="flex space-x-4">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Our Services</a>
      </div>
      <div className="navicon">X</div>
    </nav>
  );
}

export default Menubar;
