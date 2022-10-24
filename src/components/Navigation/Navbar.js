import { useState } from 'react';
import NavItems from './NavItems';
import './navbar.css';
// import logo from '%PUBLIC_URL%/logo.pn';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [active, setActive] = useState(null);

  const items = NavItems();

  const scrollEvent = () => {
    if (window.scrollY >= 150) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  window.addEventListener('scroll', scrollEvent);

  return (
    <nav
      className="navigation text-white"
      style={
				scrolling
				  ? { boxShadow: 'none' }
				  : { boxShadow: '0 2px 2px 2px rgba(9, 9, 9, 0.23)' }
			}
    >
      <a href="/" className="px-4">
        <img
          src={scrolling ? '4.png' : '3.png'}
          alt=""
          className="w-[60px] h-[60px] rounded"
        />
      </a>
      <a
        href="/"
        className="brand-name text-xl ml-4 logo-animate font-3d"
        data-text="Khidma-it"
      >
        <span className="opacity-0">খিদমা_আইটি</span>
      </a>
      <button
        className="hamburger"
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
        <ul className={`flex ${isNavExpanded ? 'mdMax:flex' : 'mdMax:hidden'}`}>
          {items.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className="nav-list-style mdMax:shadow-2xl" key={i}>
              <a
                href={`#${item.link}`}
                className={`nav-anchor-style ${
								  active === item.link && 'm-active'
                }`}
                onClick={() => setActive(item.link)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
