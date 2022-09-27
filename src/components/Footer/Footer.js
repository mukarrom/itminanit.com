import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div
      className="bg-white font-[Poppins]"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="wrapper font-[Poppins]  mx-auto pt-24 xl:max-w-6xl">
        <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 lg:gap-y-0 px-4 mb-10 justify-evenly text-base-content">
          <div className="flex flex-col justify-start items-start">
            <h1 className="h1 font-extrabold uppercase text-[#08182b] mb-6">
              Khidma IT
            </h1>
            <p className="p text-[#6a6a8e] mb-6">
              News letter dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Enter your email
            </p>
            <div className="w-full pr-6">
              <button
                type="button"
                className="py-4 text-white  bg-gradient-to-r from-[#6340bb] to-[#2d86e8] w-full border-0 rounded-full uppercase"
              >
                Become Partner &gt;
              </button>
            </div>
          </div>
          {/* -------> Contact Us <--------- */}
          <div className="flex flex-col justify-start items-center md:items-baseline">
            <h3 className="h3 text-[#051359] font-semibold mb-6">Contact Us</h3>
            <ul>
              {/* Email */}
              <li className="flex gap-x-2">
                <span className="">
                  <span className="material-symbols-outlined">mail</span>
                </span>
                <p className="">
                  <span className="font-black text-lg">Email</span>
                  <br />
                  <span>
                    <a href="mailto:info@businessname.com" className="">
                      info@khidmait.com
                    </a>
                  </span>
                </p>
              </li>
              {/* Call */}
              <li className="flex gap-x-2">
                <span className="">
                  <span className="material-symbols-outlined">call</span>
                </span>
                <p className="">
                  <span className="font-black text-lg">Phone</span>
                  <br />
                  <span>
                    <a href="tel:+10000000000" className="">
                      +880 19 000 000
                    </a>
                  </span>
                </p>
              </li>
              {/* Location */}
              <li className="flex gap-x-2">
                <span className="">
                  <span className="material-symbols-outlined">location_on</span>
                </span>
                <p className="">
                  <span className="font-black text-lg">Address</span>
                  <br />
                  <span className="">
                    {' '}
                    2350 Bhairab, Kishoreganj, Dhaka, Bangladesh
                  </span>
                </p>
              </li>
            </ul>
          </div>
          {/* End Contact Us */}
          {/* -------> Company <------ */}
          <div className="flex flex-col justify-start items-center md:items-baseline">
            <h3 className="h3 text-[#051359] font-semibold mb-6">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="link link-hover text-lg">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="link link-hover text-lg">
                  Customer's FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="link link-hover text-lg">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="link link-hover text-lg">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="link link-hover text-lg">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="link link-hover text-lg">
                  License &amp; Copyright
                </Link>
              </li>
            </ul>
          </div>
          {/* End Company */}
          {/* -------> Company <------ */}
          <div className="flex flex-col justify-start items-center md:items-baseline">
            <h3 className="h3 text-[#051359] font-semibold mb-6">Legal</h3>
            <ul className="footer-address-list">
              <li>
                <Link href="/" className="link link-hover text-lg">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/" className="link link-hover text-lg">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/" className="link link-hover text-lg">
                  Cookie policy
                </Link>
              </li>

            </ul>
          </div>
          {/* End Company */}
        </footer>
        <footer className="footer footer-center p-10 text-base-content rounded">
          {/* <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div> */}
          <div>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <p>
              Copyright © 2022 - All right reserved by Khidma IT Industries Ltd
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
