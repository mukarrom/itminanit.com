import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [active, setActive] = useState(null);

  const scrollEvent = () => {
    if (window.scrollY >= 150) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  window.addEventListener('scroll', scrollEvent);

  const links = ['home', 'about', 'why', 'service', 'products', 'contact'];

  return (
    <nav
      className="navigation h-[60px] w-full flex items-center relative py-2 px-0 "
      style={
				scrolling
				  ? { boxShadow: 'none' }
				  : { boxShadow: '0 2px 2px 2px rgba(9, 9, 9, 0.23)' }
			}
    >
      <a href="/" className="brand-name text-xl ml-4">
        Khidma IT
      </a>
      <button
        className="hamburger border-0 h-10 w-10 p-2 rounded-[50%] bg-[#283b8b] cursor-pointer absolute top-1/2 right-[25px] -translate-y-1/2 hidden hover:bg-[#2642af] mdMax:block"
        type="button"
        style={{ transition: 'background-color 0.2s ease-in-out' }}
        onClick={() => {
				  setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="navigation-menu ml-auto">
        <ul
          className={`flex p-0 mdMax:absolute mdMax:top-[60px] mdMax:left-0 mdMax:flex-col mdMax:w-full mdMax:h-auto mdMax:bg-white mdMax:border-t mdMax:border-solid mdMax:border-t-black ${
					  isNavExpanded ? 'mdMax:block' : 'mdMax:hidden'
          }`}
        >
          {links.map((link) => (
            <li className="nav-list-style">
              <a
                href={`#${link}`}
								// eslint-disable-next-line eqeqeq
                className={`nav-anchor-style ${active === link && 'm-active'}`}
                onClick={() => setActive(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        {/* <ul
          className={`flex p-0 mdMax:absolute mdMax:top-[60px] mdMax:left-0 mdMax:flex-col mdMax:w-full mdMax:h-auto mdMax:bg-white mdMax:border-t mdMax:border-solid mdMax:border-t-black ${
					  isNavExpanded ? 'mdMax:block' : 'mdMax:hidden'
          }`}
        >
          <li className={navListStyle}>
            <a
              href="#home"
              className={navAnchorStyle}
            >
              Home
            </a>
          </li>
          <li className={navListStyle}>
            <NavLink
              to="#about"
              // href="#about"
              className={navAnchorStyle}
            >
              About
            </NavLink>
          </li>
          <li className={navListStyle}>
            <NavLink
              to="#service"
              // href="#service"
              className={navAnchorStyle}
            >
              Our Services
            </NavLink>
          </li>
          <li className={navListStyle}>
            <a
              href="#product"
              className={navAnchorStyle}
            >
              Our Products
            </a>
          </li>
          <li className={navListStyle}>
            <a
              href="#contact"
              className={navAnchorStyle}
            >
              Contact Us
            </a>
          </li>

        </ul> */}
      </div>
    </nav>
  );
}
