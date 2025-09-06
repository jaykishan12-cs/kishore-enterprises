import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-2 bg-white bg-opacity-90 sticky top-0 shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div className="flex flex-wrap items-center justify-between max-w-full text-slate-800">
        <Link
          to="/"
          className="ml-5 block cursor-pointer py-1.5 text-lg text-blue-900 font-semibold"
        >
          KISHORE ENTERPRISES
        </Link>

        <div className="hidden lg:flex items-center gap-12 mr-5">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-7 text-base text-blue-900">
            <li>
              <Link to="/about" className="flex items-center">About</Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center">Contact</Link>
            </li>
            <li>
              <Link to="/reviews" className="flex items-center">Reviews</Link>
            </li>
          </ul>
          <Link
            to="/book"
            className="ml-4 px-5 py-2 bg-blue-600 text-sm text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Book a Call
          </Link>
        </div>

        <button
          className="relative ml-auto h-6 max-h-[40px] w-4 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
