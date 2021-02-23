import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="fixed flex items-center justify-between w-full h-16 text-white shadow-sm md:justify-evenly bg-foreground "
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <span className="text-4xl font-black text-white" style={{letterSpacing:"-0.2em"}}>
          A
        </span>
        <span className="text-4xl font-black text-blue">Q</span>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="hidden pr-8 font-semibold md:block">
        <Link to="/" className="p-4 hover:text-gray-900">
          Home
        </Link>
        <Link to="/authors" className="p-4 hover:text-gray-900">
          Authors
        </Link>
        <Link to="/topics" className="p-4 hover:text-gray-900">
          Topics
        </Link>
        <Link to="/quote_of_the_day" className="p-4 hover:text-gray-900">
          Quote Of The Day
        </Link>
      </div>
      <div className="hidden md:block"></div>
    </nav>
  );
};

export default Navbar;
