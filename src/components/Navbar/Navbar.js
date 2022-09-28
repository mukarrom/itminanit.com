import logo from '../../assets/shap/logo-white.png';
import Sidebar from './Sidebar';

function Navbar() {
  return (
    <div className="navbar text-white">
      <div className="navbar-start lg:hidden">
        <div className=" relative">
          <div className="absolute top-0 left-0 p-5 -mt-10">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="navbar-start">
        <a href="#home" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="#home">Home</a>
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
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#service">Our Works</a>
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
