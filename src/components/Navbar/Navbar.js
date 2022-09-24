import React, { useState } from 'react';
import AOS from 'aos';
import logo from '../../assets/shap/logo-white.png';

function Navbar() {
  // const [bgGradient, setBgGradient] = useState(false);

  // const changeBg = () => {
  //   if (window.scrollY >= 150) {
  //     setBgGradient(true);
  //   } else {
  //     setBgGradient(false);
  //   }
  // };

  // window.addEventListener('scroll', changeBg);

  AOS.init();
  return (
    <div
      className="navbar text-white"
      // className={bgGradient ? 'navbar text-white' : 'navbar text-white z-[1000] relative'}
      // data-aos="fade-down"
      // data-aos-easing="linear"
      // data-aos-duration="500"
    >
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-end">
        {/* menu icon */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                {/* <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg> */}
                About Us
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Our Works</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Home</a>
          </li>
          {/* <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Our Works</a>
          </li>
          <li>
            <a>Clients</a>
          </li>
          <li>
            <a>Our Blog</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li className="border rounded-full hover:bg-white hover:text-gray-dark">
            <a>Get a Quote</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
}

export default Navbar;
